document.querySelectorAll('.gallery-item').forEach(galleryItem => {
  const id = galleryItem.getAttribute('data-id');
  const toggleBtn = galleryItem.querySelector('.toggle-comments');
  const commentSection = galleryItem.querySelector('.comment-section');
  const commentList = galleryItem.querySelector('.comment-list');
  const commentForm = galleryItem.querySelector('.comment-form');
  const usernameInput = galleryItem.querySelector('.username-input');
  const commentInput = galleryItem.querySelector('.comment-input');

  toggleBtn.addEventListener('click', () => {
    commentSection.classList.toggle('hidden');
    toggleBtn.textContent = commentSection.classList.contains('hidden') ? 'Mostrar Comentarios' : 'Ocultar Comentarios';
    if (!commentSection.classList.contains('hidden')) {
      loadComments();
    }
  });

  function loadComments() {
    const comments = JSON.parse(localStorage.getItem('comentarios-' + id)) || [];
    commentList.innerHTML = '';

    comments.forEach(({ name, text }, index) => {
      const div = document.createElement('div');
      div.className = 'bg-white p-3 border border-gray-200 rounded shadow-sm flex justify-between items-start mb-2';

      const content = document.createElement('div');
      content.innerHTML = `<strong class="text-[#0B1F3A]">${name}</strong><p class="text-gray-700 mt-1">${text}</p>`;

      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = '🗑️';
      deleteBtn.className = 'text-red-600 hover:text-red-800 ml-4';
      deleteBtn.title = 'Borrar comentario';
      deleteBtn.addEventListener('click', () => {
        deleteComment(index);
      });

      div.appendChild(content);
      div.appendChild(deleteBtn);
      commentList.appendChild(div);
    });
  }

  function deleteComment(index) {
    let comments = JSON.parse(localStorage.getItem('comentarios-' + id)) || [];
    comments.splice(index, 1);
    localStorage.setItem('comentarios-' + id, JSON.stringify(comments));
    loadComments();
  }

  commentForm.addEventListener('submit', e => {
    e.preventDefault();
    const name = usernameInput.value.trim();
    const text = commentInput.value.trim();

    if (name && text) {
      const comments = JSON.parse(localStorage.getItem('comentarios-' + id)) || [];
      comments.push({ name, text });
      localStorage.setItem('comentarios-' + id, JSON.stringify(comments));

      commentForm.reset();
      loadComments();
    }
  });
});


// Lógica de "me gusta"
const likeBtn = galleryItem.querySelector('.like-button');
const likeCount = likeBtn.querySelector('.like-count');

// Carga el valor actual o empieza en 0
let likes = parseInt(localStorage.getItem('likes-' + id)) || 0;
likeCount.textContent = likes;

// Al hacer clic, sumar 1, guardar y actualizar visualmente
likeBtn.addEventListener('click', () => {
  likes++;
  localStorage.setItem('likes-' + id, likes);
  likeCount.textContent = likes;

  // Agregamos un pequeño efecto visual a favor de feedback al usuario
  const icon = likeBtn.querySelector('i');
  icon.classList.remove('far');
  icon.classList.add('fas', 'scale-125');
  setTimeout(() => icon.classList.remove('scale-125'), 200);
});

