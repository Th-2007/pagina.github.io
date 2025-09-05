 function showInfo(icon) {
      const card = icon.closest('.value-card');
      const container = card.querySelector('.transition-height');
      const content = container.querySelector('.p-content');

      const scrollHeight = content.scrollHeight;
      container.style.height = scrollHeight + "px";
      content.classList.remove('opacity-0');
      content.classList.add('opacity-100');
    }

    function hideInfo(icon) {
      const card = icon.closest('.value-card');
      const container = card.querySelector('.transition-height');
      const content = container.querySelector('.p-content');

      container.style.height = '0px';
      content.classList.remove('opacity-100');
      content.classList.add('opacity-0');
    }