
  document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".carousel-image");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    let currentIndex = 0;
    let interval;

    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
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

