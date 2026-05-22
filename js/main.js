(function() {
    // --- Mobile Menu Toggle ---
    const menuBtn = document.querySelector('button[aria-label="Abrir menú"], button[aria-label="Cerrar menú"]');
    const nav = document.querySelector('header nav');
    
    if (menuBtn && nav) {
        const mobileMenu = document.createElement('div');
        mobileMenu.id = 'mobile-menu';
        mobileMenu.className = 'absolute top-full left-1/2 transform -translate-x-1/2 mt-3 w-full px-4 sm:hidden';
        mobileMenu.style.display = 'none';
        
        const menuInner = document.createElement('div');
        menuInner.className = 'rounded-3xl bg-white p-4 shadow-lg text-gray-800';
        
        const links = nav.querySelectorAll('a');
        links.forEach(a => {
            const link = document.createElement('a');
            link.href = a.href;
            link.textContent = a.textContent;
            link.className = 'block px-4 py-2 rounded-md hover:bg-gray-100';
            menuInner.appendChild(link);
        });
        
        mobileMenu.appendChild(menuInner);
        
        const headerContainer = document.querySelector('header > div');
        if (headerContainer) {
            headerContainer.appendChild(mobileMenu);
        }
        
        menuBtn.addEventListener('click', () => {
            const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
            mobileMenu.style.display = isExpanded ? 'none' : 'block';
            menuBtn.setAttribute('aria-expanded', !isExpanded);
            
            if (!isExpanded) {
                menuBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 011.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>';
            } else {
                menuBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path></svg>';
            }
        });
    }

    // --- Smooth Header Scroll Grouping ---
    const headerWrapper = document.querySelector('header > div');
    const logoPill = document.querySelector('header > div > div:nth-child(1)');
    const spacer = document.querySelector('header > div > div:nth-child(2)');
    const navPill = document.querySelector('header nav');

    if (headerWrapper && logoPill && spacer && navPill) {
        let ticking = false;
        
        function updateHeader() {
            const scrollY = window.scrollY || window.pageYOffset;
            const p = Math.min(Math.max(scrollY / 400, 0), 1);
            const g = Math.max(0, 1 - 1.5 * p);
            const shadowStr = p < 0.5 ? "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" : "none";
            
            headerWrapper.style.backgroundColor = `rgba(255, 255, 255, ${0.95 * p})`;
            headerWrapper.style.backdropFilter = `blur(${12 * p}px)`;
            headerWrapper.style.boxShadow = p > 0.5 ? "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" : "none";
            headerWrapper.style.borderRadius = "9999px";
            headerWrapper.style.padding = `${0.75 * p}rem ${1.5 * p}rem`;
            
            logoPill.style.backgroundColor = `rgba(255, 255, 255, ${g})`;
            logoPill.style.boxShadow = shadowStr;
            
            navPill.style.backgroundColor = `rgba(255, 255, 255, ${g})`;
            navPill.style.boxShadow = shadowStr;
            
            spacer.style.width = `${Math.max(1, 40 * (1 - p))}vw`;
            
            ticking = false;
        }
        
        updateHeader();
        
        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(updateHeader);
                ticking = true;
            }
        }, { passive: true });
    }
})();
