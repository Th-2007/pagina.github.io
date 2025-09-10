const toggleHistoriaBtn = document.getElementById('toggleHistoria');
  const historiaContent = document.getElementById('historiaContent');
  let historiaExpanded = false;

  toggleHistoriaBtn.addEventListener('click', () => {
    historiaExpanded = !historiaExpanded;

    if (historiaExpanded) {
      historiaContent.classList.remove('max-h-[160px]', 'overflow-hidden');
      toggleHistoriaBtn.textContent = 'Leer menos';
    } else {
      historiaContent.classList.add('max-h-[160px]', 'overflow-hidden');
      toggleHistoriaBtn.textContent = 'Leer más';
    }
  });