document.addEventListener('DOMContentLoaded', () => {
  const openBtn = document.getElementById('openMenu');
  const drawer = document.getElementById('drawer');
  const backdrop = document.getElementById('backdrop');

  // Función para abrir menú
  const openMenu = () => {
    drawer.classList.remove('translate-x-full');
    backdrop.classList.remove('hidden');
  };

  // Función para cerrar menú
  const closeMenu = () => {
    drawer.classList.add('translate-x-full');
    backdrop.classList.add('hidden');
  };

  // Función toggle
  const toggleMenu = () => {
    const isOpen = !drawer.classList.contains('translate-x-full');
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  openBtn.addEventListener('click', toggleMenu);

  // Cerrar menú si clicas fuera
  backdrop.addEventListener('click', closeMenu);

  // Cerrar menú al elegir enlace
  drawer.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });
});
