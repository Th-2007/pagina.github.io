// menucelulae.js
document.addEventListener('DOMContentLoaded', () => {
  // Elementos del menú
  const openBtn = document.getElementById('openMenu');
  const drawer = document.getElementById('drawer');
  const backdrop = document.getElementById('backdrop');

  // Función abrir menú
  const openMenu = () => {
    drawer.classList.remove('translate-x-full');
    backdrop.classList.remove('hidden');
  };

  // Función cerrar menú
  const closeMenu = () => {
    drawer.classList.add('translate-x-full');
    backdrop.classList.add('hidden');
  };

  // Alternar menú
  const toggleMenu = () => {
    const isOpen = !drawer.classList.contains('translate-x-full');
    isOpen ? closeMenu() : openMenu();
  };

  // Eventos de menú
  openBtn.addEventListener('click', toggleMenu);
  backdrop.addEventListener('click', closeMenu);
  drawer.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));

  
});
