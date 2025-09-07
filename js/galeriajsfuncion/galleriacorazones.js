
  document.addEventListener('DOMContentLoaded', () => {
    // Obtener todos los botones de "like"
    document.querySelectorAll('.like-button').forEach(button => {
      const icon = button.querySelector('i');
      const countSpan = button.querySelector('.like-count');
      const id = button.getAttribute('data-id');

      // Recuperar likes guardados en localStorage si existen
      let likes = parseInt(localStorage.getItem(`likes-${id}`)) || 0;
      let liked = localStorage.getItem(`liked-${id}`) === 'true';

      // Inicializar visualmente
      countSpan.textContent = likes;
      if (liked) icon.classList.replace('far', 'fas');

      // Evento click
      button.addEventListener('click', () => {
        liked = !liked;

        if (liked) {
          icon.classList.replace('far', 'fas');
          likes++;
        } else {
          icon.classList.replace('fas', 'far');
          likes--;
        }

        countSpan.textContent = likes;
        localStorage.setItem(`likes-${id}`, likes);
        localStorage.setItem(`liked-${id}`, liked);
      });
    });
  });
