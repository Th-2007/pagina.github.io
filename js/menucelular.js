

document.addEventListener('DOMContentLoaded', () => {
  const openBtn = document.getElementById('openMenu');
  const drawer = document.getElementById('drawer');
  const backdrop = document.getElementById('backdrop');

  const openMenu = () => {
    drawer.classList.remove('translate-x-full');
    backdrop.classList.remove('hidden');
  };

  const closeMenu = () => {
    drawer.classList.add('translate-x-full');
    backdrop.classList.add('hidden');
  };

  const toggleMenu = () => {
    const isOpen = !drawer.classList.contains('translate-x-full');
    isOpen ? closeMenu() : openMenu();
  };

  openBtn.addEventListener('click', toggleMenu);
  backdrop.addEventListener('click', closeMenu);

  drawer.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });
});
