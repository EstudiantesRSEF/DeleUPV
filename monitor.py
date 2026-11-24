from collections import deque
import difflib
import hashlib
import os
import re
from urllib.parse import urljoin, urldefrag
from bs4 import BeautifulSoup
import requests

# Ruta base de la delegación: solo se seguirán enlaces que empiecen por aquí
URL_BASE = "https://estudiantes.rsef.es/DeleUPV/"

MAX_PAGINAS = 35      # Límite de páginas por ejecución para ir rápido
MAX_PROFUNDIDAD = 2   # 0 = solo base, 1 = enlaces directos, 2 = un nivel más

CACHE_DIR = "cache_estados"
SLACK_WEBHOOK_URL = os.environ.get("SLACK_WEBHOOK_URL")
GEMINI_API_KEY = os.environ.get("GEMINI_API_KEY")

EXTENSIONES_IGNORADAS = (
    ".pdf", ".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg",
    ".zip", ".rar", ".tar", ".gz", ".mp4", ".mp3", ".css", ".js", ".xml"
)


def normalizar_url(base, href):
    if not href:
        return None
    href = href.strip()
    if href.startswith(("mailto:", "tel:", "javascript:")):
        return None
    url_abs = urljoin(base, href)
    url_limpia, _ = urldefrag(url_abs)  # Quita #anclas
    # Normaliza barra final salvo en la raíz exacta
    if url_limpia.endswith("/") and url_limpia != URL_BASE.rstrip("/") + "/":
        url_limpia = url_limpia.rstrip("/")
    return url_limpia


def es_url_valida(url):
    base_sin_barra = URL_BASE.rstrip("/")
    if not (url == base_sin_barra or url.startswith(base_sin_barra + "/")):
        return False
    url_lower = url.lower().split("?")[0]
    if url_lower.endswith(EXTENSIONES_IGNORADAS):
        return False
    return True


def obtener_pagina(url):
    resp = requests.get(url, headers={"User-Agent": "Mozilla/5.0"}, timeout=15)
    resp.raise_for_status()
    content_type = resp.headers.get("Content-Type", "").lower()
    if "text/html" not in content_type:
        return "", []

    soup = BeautifulSoup(resp.text, "html.parser")
    enlaces = []
    for a in soup.find_all("a", href=True):
        u = normalizar_url(url, a["href"])
        if u and es_url_valida(u):
            enlaces.append(u)

    for element in soup(["script", "style", "nav", "footer"]):
        element.extract()

    texto = re.sub(r"\s+", " ", soup.get_text(separator=" ", strip=True))
    return texto, enlaces


def descubrir_urls(inicio):
    visitadas = set()
    cola = deque([(normalizar_url(inicio, inicio), 0)])
    descubiertas = []

    while cola and len(descubiertas) < MAX_PAGINAS:
        url, prof = cola.popleft()
        if not url or url in visitadas:
            continue
        visitadas.add(url)

        try:
            texto, enlaces = obtener_pagina(url)
        except Exception as e:
            print(f"Aviso al leer {url}: {e}")
            continue

        descubiertas.append((url, texto))

        if prof < MAX_PROFUNDIDAD:
            for enl in enlaces:
                if enl not in visitadas:
                    cola.append((enl, prof + 1))

    return descubiertas


def generate_ai_summary(url, diff_text, es_nueva=False):
    if not GEMINI_API_KEY:
        prefijo = "Página nueva detectada" if es_nueva else "Cambios detectados"
        return f"{prefijo} en {url}:\n```{diff_text[:500]}```"

    if es_nueva:
        prompt = (
            f"Se ha publicado una nueva página o entrada en una delegación estudiantil ({url}). "
            f"Resume en 2 frases de qué trata de forma clara y directa:\n\n{diff_text[:2000]}"
        )
    else:
        prompt = (
            f"Analiza estos cambios detectados en {url} de una delegación estudiantil "
            f"y resume en 2 frases qué se ha modificado o añadido de forma clara y directa:\n\n"
            f"{diff_text[:2000]}"
        )

    api_url = (
        "https://generativelanguage.googleapis.com/v1beta/models/"
        f"gemini-2.5-flash:generateContent?key={GEMINI_API_KEY}"
    )
    payload = {"contents": [{"parts": [{"text": prompt}]}]}

    try:
        res = requests.post(api_url, json=payload, timeout=20).json()
        return res["candidates"][0]["content"]["parts"][0]["text"].strip()
    except Exception as e:
        return f"Cambio detectado en {url} (error al resumir con IA): {e}"


def send_to_slack(url, summary, es_nueva=False):
    if not SLACK_WEBHOOK_URL:
        return
    titulo = "🆕 *Nueva subpágina/entrada detectada*" if es_nueva else "🚨 *Cambio detectado en delegación*"
    message = {
        "text": f"{titulo}\n*URL:* {url}\n\n*Resumen (IA):*\n{summary}"
    }
    requests.post(SLACK_WEBHOOK_URL, json=message, timeout=15)


def cache_path_for_url(url):
    digest = hashlib.sha256(url.encode("utf-8")).hexdigest()[:16]
    return os.path.join(CACHE_DIR, f"{digest}.txt")


def main():
    os.makedirs(CACHE_DIR, exist_ok=True)
    hay_cache_previo = any(os.listdir(CACHE_DIR))

    paginas = descubrir_urls(URL_BASE)

    for url, current_text in paginas:
        if not current_text:
            continue
        path = cache_path_for_url(url)

        if os.path.exists(path):
            with open(path, "r", encoding="utf-8") as f:
                previous_text = f.read()

            if current_text != previous_text:
                diff = "\n".join(
                    difflib.unified_diff(
                        previous_text.splitlines(),
                        current_text.splitlines(),
                        lineterm="",
                    )
                )
                summary = generate_ai_summary(url, diff, es_nueva=False)
                send_to_slack(url, summary, es_nueva=False)
        else:
            # Solo avisa de "página nueva" si ya existía caché previa (evita inundar en la 1.ª ejecución)
            if hay_cache_previo:
                summary = generate_ai_summary(url, current_text, es_nueva=True)
                send_to_slack(url, summary, es_nueva=True)

        with open(path, "w", encoding="utf-8") as f:
            f.write(current_text)


if __name__ == "__main__":
    main()
