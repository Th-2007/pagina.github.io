 // Lista de noticias que rotarán
  const noticias = [
    "Graduación de los terceros años",
    "Se acercan los exámenes finales",
    "Inician las inscripciones 2025",
    "Nueva biblioteca digital disponible",
    "Concurso de ciencia y tecnología en marcha"
  ];

  let indice = 0;
  const mensaje = document.getElementById("mensaje-noticia");

  // Función que cambia la noticia cada 5 segundos
  setInterval(() => {
    indice = (indice + 1) % noticias.length;
    mensaje.style.opacity = 0;
    setTimeout(() => {
      mensaje.textContent = noticias[indice];
      mensaje.style.opacity = 1;
    }, 500);
  }, 5000);