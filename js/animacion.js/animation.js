 // Initialize AOS
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            offset: 100
        });

        // Mobile Menu Toggle
        const mobileMenuButton = document.querySelector('.mobile-menu-button');
        const mobileMenu = document.querySelector('.mobile-menu');

        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('open');

            // Toggle icon
            const icon = mobileMenuButton.querySelector('i');
            if (mobileMenu.classList.contains('open')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.mobile-menu a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('open');

                // Reset icon
                const icon = mobileMenuButton.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });

        // Active nav link on scroll
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');

        window.addEventListener('scroll', () => {
            let current = '';

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;

                if (pageYOffset >= sectionTop - 200) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').substring(1) === current) {
                    link.classList.add('active');
                }
            });
        });


        // Initialize on load
        document.addEventListener('DOMContentLoaded', () => {
            initializeLikes();

            // Set initial active nav link
            const currentSection = window.location.hash ? window.location.hash.substring(1) : 'inicio';
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${currentSection}`) {
                    link.classList.add('active');
                }
            });
        });