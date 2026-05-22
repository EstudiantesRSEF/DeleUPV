// ============================================================================
// DATOS DE LAS ACTIVIDADES (EDITABLE)
// Para aÃ±adir una nueva actividad, simplemente aÃ±ade un nuevo bloque al objeto.
// AsegÃºrate de que el id en HTML (data-id) coincida con la clave.
// ============================================================================
const activitiesData = {
    "spectrum": {
        title: "Charla: The spectrum of Science",
        date: "Mayo de 2026",
        description: "<p>Una charla fascinante donde exploraremos la profundidad de la ciencia pasando por todas sus etapas.</p>",
        images: ["./images/activities/SPECTRUM.jpg"]
    },
    "eureka": {
        title: "Eureka Spain",
        date: "Del 27 al 31 de Abril de 2026",
        description: "<p>Eureka Spain serÃ¡ una semana dedicada a celebrar y dar a conocer la ciencia espaÃ±ola. Del 27 al 30 de abril, llenaremos la escuela de talleres, actividades y una mesa redonda que esperamos sea de todo vuestro interÃ©s. Â¡Esperamos veros por los pasillos!</p>",
        images: ["./images/activities/EUREKA.jpg"]
    },
    "anecoica": {
        title: "Visita CÃ¡mara semi-necoica - CMT",
        date: "11 de diciembre de 2025",
        description: "<p>Gracias a nuestro profesor Antonio Torregosa, la delegaciÃ³n tuvo la oportunidad de visitar la CÃ¡mara AnecÃ³ica AcÃºstica de la Universidad de PolitÃ©cnica de Valencia.</p><p> Pudimos disfrutar de un acercamiento a la ingenierÃ­a acÃºstica que se desenvuelve en nuestro entorno, mÃ¡s allÃ¡ de la teorÃ­a del aula.</p><p>Muchas gracias a Antonio por la oportunidad y a todos los asistentes por su interÃ©s y participaciÃ³n.</p>",
        images: ["./images/activities/ANECOICA 1.jpeg","./images/activities/ANECOICA 2.jpeg","./images/activities/ANECOICA 3.jpeg","./images/activities/ANECOICA 4.jpeg"]
    },
    "feria": {
        title: "Feria CientÃ­fica",
        date: "20 de noviembre de 2025",
        description: "<p>El pasado 20 de noviembre de 2025 celebramos nuestra Feria CientÃ­fica con el propÃ³sito claro de abrir las puertas de la delegaciÃ³n a toda la facultad y compartir nuestra pasiÃ³n por lo que estudiamos cada dÃ­a. </p><p>Muchas gracias a todos los asistentes, realmente esperamos que hayÃ¡is disfrutado de la feria, concursos y comida. Ha sido increÃ­ble ver los pasillos llenos de gente curioseando y disfrutando con los experimentos que con tanto cariÃ±o preparamos para esta jornada. </p><p>Nuestra mÃ¡s sincera gratitud al profesorado por confiar en nosotros y prestarnos tanto el material como los experimentos ya que su apoyo acadÃ©mico es la base sobre la cual podemos divulgar ciencia de calidad. TambiÃ©n extendemos nuestro agradecimiento a la Escuela TÃ©cnica Superior de IngenierÃ­a de TelecomunicaciÃ³n por su generosidad al facilitarnos las mesas necesarias para montar los puestos pues esta interconexiÃ³n entre escuelas es lo que realmente hace grande a la UPV. </p><p>Y por supuesto, nada de esto habrÃ­a sido posible sin nuestro equipo de colaboradores que ha sido el autÃ©ntico motor de la feria dedicando su tiempo y energÃ­a para explicar cada concepto con entusiasmo. Â¡Esta jornada ha sido solo el primer paso para darnos a conocer y seguiremos trabajando para que la fÃ­sica no se quede solo en los apuntes, sino que se viva y se comparta!</p>",
        images: ["./images/activities/FERIA 5.jpg","./images/activities/FERIA 1.jpg","./images/activities/FERIA 4.jpg","./images/activities/FERIA 3.jpg"]
    },
    "postales": {
        title: "Concurso Postales NavideÃ±as",
        date: "15 de diciembre de 2025",
        description: "<p>Para despedir el aÃ±o con alegrÃ­a, la delegaciÃ³n ha organizado un concurso de postales navideÃ±as con temÃ¡tica friki, Â¡cÃ³mo no! </p><p>La verdad es que el talento nos sorprendiÃ³. Muchas de las postales candidatas podÃ­an ser perfectas ganadoras; desde la originalidad, gracia y sorpresa hasta la belleza de las imÃ¡genes, el cariÃ±o de nuestros participantes abarco todo el abanico de emociones.</p><p>Tras recibir las 8 propuestas y unas largas jornadas de votaciÃ³n por nuestras redes, Â¡la postal de Adriana Vilanova Alabau se hizo la ganadora! Â¡Enhorabuena!</p>",
        images: ["./images/activities/POSTALES-TODAS.png","./images/activities/GANADORA.png","./images/activities/VOTOS.png"]
    },
    "astronomica": {
        title: "Salida AstronÃ³mica",
        date: "20 y 21 de febrero de 2026",
        description: "<p>La pasada noche del 20 al 21 de febrero, nuestra delegaciÃ³n junto a la de la UV hospedÃ³ una fantÃ¡stica jornada en el Tossal de la Verge, Villalonga.</p><p>Los mÃ¡s de 50 participantes empezaron a llegar sobre las 20 de la tarde, para despuÃ©s cenar y escuchar a la fantÃ¡stica AsociaciÃ³n de AstronomÃ­a de la UV, quienes nos explicaron quÃ© verÃ­amos esta noche de una manera sencilla pero llamativa.</p><p>Mientras los diferentes grupos de personas subÃ­an a la terraza a hacer la observaciÃ³n, Â¡los demÃ¡s se divertÃ­an en una Gymkana tematizada para la ocasiÃ³n! La noche fue estupenda, llena de buenos momentos, nuevos compaÃ±eros y grandes recuerdos.</p><p>A la maÃ±ana siguiente desayunamos con las riquÃ­simas rosquilletas de Velarte, y se hizo una ruta por la Senda dels cocons para disfrutar de la naturaleza que se echa de menos en la ciudad. Sin embargo, esta ruta nos dejarÃ­a hambrientos, pero por suerte pudimos contar con la paella de El mosset para saciarnos, Â¡y quÃ© buenas estaban!</p><p>Gracias a tod@s por venir, fue una experiencia estupenda.</p>",
        images: ["./images/activities/ASTRONOMICA 1.jpeg","./images/activities/ASTRONOMICA 2.jpeg","./images/activities/ASTRONOMICA 3.jpeg","./images/activities/ASTRONOMICA 4.jpeg"]
    }
};

(function() {
    // Generar el HTML del modal y aÃ±adirlo al body
    const modalHTML = `
    <div id="activity-modal" class="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6" style="display:none;">
        <div id="modal-backdrop" class="absolute inset-0 bg-black/30 backdrop-blur-md transition-opacity duration-300"></div>
        <div class="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white shadow-2xl flex flex-col" style="scrollbar-width: thin; animation: modal-zoom 0.3s ease-out;">
            <button id="modal-close" class="absolute right-4 top-4 z-20 rounded-full bg-white/80 p-2 text-gray-500 hover:bg-white hover:text-gray-900 transition-colors backdrop-blur-sm shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>
            <div class="relative h-64 sm:h-96 w-full flex-shrink-0 bg-gray-100 group" id="modal-image-container">
                <img id="modal-image" src="" alt="Imagen de actividad" class="object-contain w-full h-full absolute inset-0">
                <button id="modal-prev" class="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/70 p-2 text-gray-800 hover:bg-white shadow-md transition-all opacity-0 group-hover:opacity-100" style="display:none;">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                    </svg>
                </button>
                <button id="modal-next" class="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/70 p-2 text-gray-800 hover:bg-white shadow-md transition-all opacity-0 group-hover:opacity-100" style="display:none;">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                </button>
                <div id="modal-dots" class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2"></div>
            </div>
            <div class="p-8 sm:p-10 flex-grow">
                <div class="mb-6">
                    <span id="modal-date" class="text-sm font-bold text-emerald-600 uppercase tracking-wide"></span>
                    <h2 id="modal-title" class="text-3xl font-bold text-gray-900 mt-2"></h2>
                </div>
                <div id="modal-description" class="prose prose-blue max-w-none text-gray-600 leading-relaxed"></div>
            </div>
        </div>
    </div>
    <style>
        @keyframes modal-zoom {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
        }
    </style>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    const modal = document.getElementById('activity-modal');
    const backdrop = document.getElementById('modal-backdrop');
    const closeBtn = document.getElementById('modal-close');
    const imgEl = document.getElementById('modal-image');
    const titleEl = document.getElementById('modal-title');
    const dateEl = document.getElementById('modal-date');
    const descEl = document.getElementById('modal-description');
    const prevBtn = document.getElementById('modal-prev');
    const nextBtn = document.getElementById('modal-next');
    const dotsContainer = document.getElementById('modal-dots');

    let currentImages = [];
    let currentIndex = 0;

    function renderImage() {
        if(currentImages.length > 0) {
            imgEl.src = currentImages[currentIndex];
        }
        
        dotsContainer.innerHTML = '';
        if (currentImages.length > 1) {
            currentImages.forEach((_, idx) => {
                const dot = document.createElement('div');
                dot.className = `h-2 w-2 rounded-full transition-all cursor-pointer ${idx === currentIndex ? 'bg-white w-4' : 'bg-white/50'}`;
                dot.addEventListener('click', () => {
                    currentIndex = idx;
                    renderImage();
                });
                dotsContainer.appendChild(dot);
            });
            prevBtn.style.display = 'block';
            nextBtn.style.display = 'block';
        } else {
            prevBtn.style.display = 'none';
            nextBtn.style.display = 'none';
        }
    }

    function openModal(dataId) {
        const data = activitiesData[dataId];
        if(!data) return;
        
        titleEl.textContent = data.title;
        dateEl.textContent = data.date;
        descEl.innerHTML = data.description;
        
        currentImages = data.images;
        currentIndex = 0;
        renderImage();
        
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'unset';
    }

    backdrop.addEventListener('click', closeModal);
    closeBtn.addEventListener('click', closeModal);
    
    prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
        renderImage();
    });
    
    nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        currentIndex = (currentIndex + 1) % currentImages.length;
        renderImage();
    });

    const activityCards = document.querySelectorAll('.group.cursor-pointer');
    const idMapping = ["spectrum", "eureka", "anecoica", "feria", "postales", "astronomica"];
    
    activityCards.forEach((card, index) => {
        card.addEventListener('click', () => {
            let dataId = card.getAttribute('data-id');
            if(!dataId && index < idMapping.length) {
                dataId = idMapping[index];
            }
            if(dataId) {
                openModal(dataId);
            }
        });
    });
})();
