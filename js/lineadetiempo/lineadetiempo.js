 document.addEventListener('DOMContentLoaded', () => {
    // Selecciona todos los toggles móviles y desktop
    const toggles = document.querySelectorAll('#timeline .toggle-btn');

    toggles.forEach(toggle => {
      toggle.addEventListener('click', () => {
        // Para móvil: el contenedor padre .timeline-item
        // Para desktop: contenedor .timeline-item-horizontal (los toggles están solo en móvil, pero igual)
        const isMobile = window.innerWidth < 768;
        let item;
        if (isMobile) {
          item = toggle.closest('.timeline-item');
        } else {
          item = toggle.closest('.timeline-item-horizontal');
        }

        // Si es móvil y el toggle es el h4, mostramos el p correspondiente
        if (item) {
          // Para móvil
          if (isMobile) {
            // Toggle clase active al item
            const isActive = item.classList.contains('active');
            // Cerrar todos primero
            document.querySelectorAll('#timeline .timeline-item').forEach(i => {
              i.classList.remove('active');
              const p = i.querySelector('.content-text');
              if (p) p.classList.remove('active');
            });
            if (!isActive) {
              item.classList.add('active');
              const p = item.querySelector('.content-text');
              if (p) p.classList.add('active');
            }
          } else {
            // Para desktop
            // Aquí el toggle-btn no existe, entonces hacemos toggle en click del item horizontal
            // Pero para que funcione en desktop, añadiremos evento click abajo a los items horizontales
          }
        }
      });
    });

    // Para desktop, togglear al hacer click en .timeline-item-horizontal
    const horizontalItems = document.querySelectorAll('#timeline .timeline-item-horizontal');
    horizontalItems.forEach(item => {
      item.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        // Cerrar todos
        horizontalItems.forEach(i => {
          i.classList.remove('active');
          const p = i.querySelector('.content-text-hidden');
          if (p) p.classList.remove('active');
        });
        if (!isActive) {
          item.classList.add('active');
          const p = item.querySelector('.content-text-hidden');
          if (p) p.classList.add('active');

          // Scroll suave centrando el item
          item.scrollIntoView({ behavior: 'smooth', inline: 'center' });
        }
      });

      // Accesibilidad teclado
      item.setAttribute('tabindex', '0');
      item.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          item.click();
        }
      });
    });
  });



  document.querySelectorAll('.toggle-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    // Aquí buscamos el <p> hermano que contiene el contenido oculto
    const content = btn.parentElement.querySelector('.content-text');
    if (content) {
      content.classList.toggle('hidden');
    }
  });
});

// Para la línea horizontal, que usa otro nombre de clase:
document.querySelectorAll('.timeline-item-horizontal').forEach(item => {
  item.addEventListener('click', () => {
    const p = item.querySelector('.content-text-hidden');
    if (p) {
      p.classList.toggle('hidden');
    }
  });
});
