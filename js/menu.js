const header = document.querySelector('header');
const targetSection = document.querySelector('#fundacion');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY + header.offsetHeight;
  const targetPosition = targetSection.offsetTop;

  if (scrollPosition >= targetPosition) {
    // Oculta el header hacia arriba
    header.style.transform = 'translateY(-100%)';
  } else {
    // Muestra el header en su lugar original
    header.style.transform = 'translateY(0)';
  }
});
