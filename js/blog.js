(function() {
    const blogContainer = document.querySelector('.mx-4.rounded-\\[2\\.5rem\\].bg-white.p-8.lg\\:p-16.shadow-2xl');
    if (!blogContainer) return;
    
    const toggleBtn = blogContainer.querySelector('button');
    const defaultPlaceholder = blogContainer.querySelector('.flex.flex-col.items-center.justify-center.py-10');
    
    if (toggleBtn && defaultPlaceholder) {
        const cookingHTML = `
        <div id="blog-cooking-anim" class="flex flex-col items-center justify-center py-20 mt-4 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-100 relative overflow-hidden" style="display:none;">
            <div class="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
                <span class="text-[8rem] md:text-[12rem] font-black text-gray-100 tracking-widest opacity-60">🍳</span>
            </div>
            <div class="relative z-10 flex flex-col items-center gap-4">
                <span class="text-5xl md:text-7xl font-black bg-gradient-to-r from-blue-600 via-purple-500 to-emerald-500 bg-clip-text text-transparent tracking-tight animate-pulse" style="animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;">cocinando...</span>
                <p class="text-gray-400 text-lg font-medium mt-2">Estamos preparando artículos increíbles para ti 🔬</p>
            </div>
        </div>
        `;
        
        defaultPlaceholder.insertAdjacentHTML('afterend', cookingHTML);
        const cookingBlock = document.getElementById('blog-cooking-anim');
        
        let isOpen = false;
        
        toggleBtn.addEventListener('click', () => {
            isOpen = !isOpen;
            if (isOpen) {
                defaultPlaceholder.style.display = 'none';
                cookingBlock.style.display = 'flex';
                toggleBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path></svg>Ocultar artículos';
            } else {
                defaultPlaceholder.style.display = 'flex';
                cookingBlock.style.display = 'none';
                toggleBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>Ver artículos';
            }
        });
    }
})();
