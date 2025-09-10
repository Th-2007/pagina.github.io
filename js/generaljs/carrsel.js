
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".carousel-image");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  let currentIndex = 0;
  let interval;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.classList.add("opacity-100");
        slide.classList.remove("opacity-0");
      } else {
        slide.classList.remove("opacity-100");
        slide.classList.add("opacity-0");
      }
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  }

  function startAutoSlide() {
    interval = setInterval(nextSlide, 5000);
  }

  function resetAutoSlide() {
    clearInterval(interval);
    startAutoSlide();
  }

  prevBtn.addEventListener("click", () => {
    prevSlide();
    resetAutoSlide();
  });

  nextBtn.addEventListener("click", () => {
    nextSlide();
    resetAutoSlide();
  });

  showSlide(currentIndex);
  startAutoSlide();
});

