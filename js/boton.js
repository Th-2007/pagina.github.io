
  const openBtn = document.getElementById("openImageModal");
  const closeBtn = document.getElementById("closeImageModal");
  const modal = document.getElementById("imageModal");

  openBtn.addEventListener("click", () => {
    modal.classList.remove("hidden");
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  // Cerrar al hacer clic fuera de la imagen
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.add("hidden");
    }
  });
