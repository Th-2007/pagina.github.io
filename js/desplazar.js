document.querySelectorAll('.value-card').forEach(card => {
  card.addEventListener('click', function () {
    const container = card.querySelector('.transition-height');
    const content = container.querySelector('.p-content');
    const isOpen = content.classList.contains('opacity-100');

    // Primero, cerrar todas las tarjetas
    document.querySelectorAll('.value-card').forEach(otherCard => {
      const otherContainer = otherCard.querySelector('.transition-height');
      const otherContent = otherContainer.querySelector('.p-content');
      otherContainer.style.height = '0px';
      otherContent.classList.remove('opacity-100');
      otherContent.classList.add('opacity-0');
    });

    // Si la tarjeta que se hizo clic no estaba abierta, abrirla
    if (!isOpen) {
      const scrollHeight = content.scrollHeight;
      container.style.height = scrollHeight + "px";
      content.classList.remove('opacity-0');
      content.classList.add('opacity-100');
    }
  });
});
