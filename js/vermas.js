
  const toggleBtn = document.getElementById('toggleInicios');
  const content = document.getElementById('iniciosContent');
  let isExpanded = false;

  toggleBtn.addEventListener('click', () => {
    isExpanded = !isExpanded;
    if (isExpanded) {
      content.classList.remove('max-h-[160px]', 'overflow-hidden');
      toggleBtn.textContent = 'Leer menos';
    } else {
      content.classList.add('max-h-[160px]', 'overflow-hidden');
      toggleBtn.textContent = 'Leer más';
    }
  });
