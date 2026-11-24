import os
import requests
from bs4 import BeautifulSoup
import diffybob # O difflib nativo de python

URL_DELEGACION = "https://ejemplo-delegacion.es" # Cambia por la web objetivo
CACHE_FILE = "last_state.txt"
SLACK_WEBHOOK_URL = os.environ.get("SLACK_WEBHOOK_URL")
GEMINI_API_KEY = os.environ.get("GEMINI_API_KEY")

def get_web_text(url):
    response = requests.get(url, headers={'User-Agent': 'Mozilla/5.0'})
    soup = BeautifulSoup(response.text, 'html.parser')
    
    # Eliminamos scripts, estilos y menús para evitar falsos positivos
    for element in soup(["script", "style", "nav", "footer"]):
        element.extract()
        
    return soup.get_text(separator=' ', strip=True)

def generate_ai_summary(diff_text):
    if not GEMINI_API_KEY:
        return f"Se han detectado los siguientes cambios:\n```{diff_text[:500]}```"
        
    prompt = f"Analiza estos cambios en la web de una delegación estudiantil y resume en 2 frases qué han modificado o añadido de forma clara y directa:\n\n{diff_text[:2000]}"
    
    url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key={GEMINI_API_KEY}"
    payload = {"contents": [{"parts": [{"text": prompt}]}]}
    
    try:
        res = requests.post(url, json=payload).json()
        return res['candidates'][0]['content']['parts'][0]['text']
    except Exception as e:
        return f"Cambio detectado (error al resumir con IA): {e}"

def send_to_slack(summary):
    message = {
        "text": f"🚨 *Cambio detectado en la delegación*\n\n*Resumen del cambio (IA):*\n{summary}"
    }
    requests.post(SLACK_WEBHOOK_URL, json=message)

def main():
    current_text = get_web_text(URL_DELEGACION)
    
    previous_text = ""
    if os.path.exists(CACHE_FILE):
        with open(CACHE_FILE, "r", encoding="utf-8") as f:
            previous_text = f.read()
            
    if previous_text and current_text != previous_text:
        # Generar un diff simple
        import difflib
        diff = "\n".join(difflib.unified_diff(
            previous_text.splitlines(),
            current_text.splitlines(),
            lineterm=""
        ))
        
        summary = generate_ai_summary(diff)
        send_to_slack(summary)
        
    # Guardar el estado actual
    with open(CACHE_FILE, "w", encoding="utf-8") as f:
        f.write(current_text)

if __name__ == "__main__":
    main()
