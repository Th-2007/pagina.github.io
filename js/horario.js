   // Inicializar AOS
            AOS.init({ duration: 800, easing: 'ease-in-out', once: true });

            // Filtro interactivo
            const buttons = document.querySelectorAll('.filter-btn');
            const cards = document.querySelectorAll('.exam-card');

            buttons.forEach(button => {
                button.addEventListener('click', () => {
                    const category = button.getAttribute('data-category');
                    cards.forEach(card => {
                        if (category === 'all' || card.getAttribute('data-category') === category) {
                            card.classList.remove('hidden');
                            card.classList.add('block');
                        } else {
                            card.classList.add('hidden');
                            card.classList.remove('block');
                        }
                    });
                });
            });

            // Botón volver arriba
            const scrollBtn = document.getElementById('scrollTopBtn');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 300) scrollBtn.classList.remove('hidden');
                else scrollBtn.classList.add('hidden');
            });

            scrollBtn.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });