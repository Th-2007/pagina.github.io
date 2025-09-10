document.addEventListener('DOMContentLoaded', () => {
    const messages = [
        "“Fuertes”",
        "“Comprometidos”",
        "“Unidos”",
        "“Innovadores”",
        "“Resilientes”",
        "“Solidarios”",
        "“Responsables”",
        "“Líderes”",
        "“Creativos”",
        "“Inclusivos”",
        "“Empáticos”",
        "“Valientes”",
        "“Visionarios”",
        "“Auténticos”",
        "“Excelentes”",
        "“Perseverantes”",
        "“Organizados”",
        "“Inspiradores”",
        "“Respetuosos”",
        "“Transformadores”"
    ];

    let current = 0;
    const rotatingText = document.getElementById("rotating-text");

    function changeText() {
        rotatingText.style.opacity = 0;

        setTimeout(() => {
            rotatingText.textContent = messages[current];
            rotatingText.style.opacity = 1;

            current++;
            if (current >= messages.length) current = 0;
        }, 1000);
    }

    // Mostrar el primer texto al cargar
    rotatingText.textContent = messages[0];

    // Cambiar texto cada 3 segundos
    setInterval(changeText, 3000);
});
