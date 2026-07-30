(function() {
    const blogContainer = document.querySelector('.mx-4.rounded-\\[2\\.5rem\\].bg-white.p-8.lg\\:p-16.shadow-2xl');
    if (!blogContainer) return;
    
    const toggleBtn = blogContainer.querySelector('button');
    const defaultPlaceholder = blogContainer.querySelector('.flex.flex-col.items-center.justify-center.py-10');
    
    if (toggleBtn && defaultPlaceholder) {
        // Article card + cooking animation HTML
        const articlesHTML = `
        <div id="blog-articles-container" style="display:none;">
            <!-- Artículo: Belén en YMLM -->
            <a href="https://estudiantes.rsef.es/blog/2026/06/17/Belen_YMLM/" target="_blank" rel="noopener noreferrer" class="block mb-6 group" style="text-decoration:none;">
                <div class="rounded-2xl border border-gray-100 bg-white shadow-md p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-blue-200 cursor-pointer">
                    <div class="flex items-center gap-4">
                        <div class="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center text-white text-xl shadow-md">
                            🌍
                        </div>
                        <div class="flex-grow">
                            <span class="text-xs font-bold text-emerald-600 uppercase tracking-wide">Nuevo artículo</span>
                            <h3 class="text-lg font-bold text-gray-900 mt-1 group-hover:text-blue-600 transition-colors">GdeE por el mundo: Belén en el 2026 EPS YM Leadership Meeting en Vilna</h3>
                        </div>
                        <div class="flex-shrink-0 text-gray-400 group-hover:text-blue-600 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </a>

            <!-- Animación cocinando... -->
            <div id="blog-cooking-anim" class="flex flex-col items-center justify-center py-20 mt-4 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-100 relative overflow-hidden">
                <div class="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
                    <span class="text-[8rem] md:text-[12rem] font-black text-gray-100 tracking-widest opacity-60">🍳</span>
                </div>
                <div class="relative z-10 flex flex-col items-center gap-4">
                    <span class="text-5xl md:text-7xl font-black bg-gradient-to-r from-blue-600 via-purple-500 to-emerald-500 bg-clip-text text-transparent tracking-tight animate-pulse" style="animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;">cocinando...</span>
                    <p class="text-gray-400 text-lg font-medium mt-2">Estamos preparando artículos increíbles para ti 🔬</p>
                </div>
            </div>
        </div>
        `;
        
        defaultPlaceholder.insertAdjacentHTML('afterend', articlesHTML);
        const articlesContainer = document.getElementById('blog-articles-container');
        
        let isOpen = false;
        
        toggleBtn.addEventListener('click', () => {
            isOpen = !isOpen;
            if (isOpen) {
                defaultPlaceholder.style.display = 'none';
                articlesContainer.style.display = 'block';
                toggleBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path></svg>Ocultar artículos';
            } else {
                defaultPlaceholder.style.display = 'flex';
                articlesContainer.style.display = 'none';
                toggleBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>Ver artículos';
            }
        });
    }
})();
