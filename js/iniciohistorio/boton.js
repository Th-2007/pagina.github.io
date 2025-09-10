const openBtn = document.getElementById("openImageModal");
const closeBtn = document.getElementById("closeImageModal");
const modal = document.getElementById("imageModal");
const modalContent = modal.querySelector("div"); // contenido del modal

// Función para abrir modal
function openModal() {
  modal.classList.remove("hidden");
  document.body.classList.add("overflow-hidden"); // bloquea scroll
  // pequeña animación
  setTimeout(() => {
    modalContent.classList.remove("scale-95", "opacity-0");
    modalContent.classList.add("scale-100", "opacity-100");
  }, 10);
}

// Función para cerrar modal
function closeModal() {
  modalContent.classList.remove("scale-100", "opacity-100");
  modalContent.classList.add("scale-95", "opacity-0");

  // espera la transición antes de ocultar
  setTimeout(() => {
    modal.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
  }, 200);
}

// Eventos
if (openBtn) openBtn.addEventListener("click", openModal);
if (closeBtn) closeBtn.addEventListener("click", closeModal);

// Cerrar al hacer clic fuera del contenido
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

// Cerrar con tecla ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
