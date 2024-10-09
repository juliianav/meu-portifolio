document.addEventListener("DOMContentLoaded", function() {
    // O efeito de digitação será aplicado à classe 'typing'
    const text = "Desenvolvedora Web | Apaixonada por Tecnologia";
    let index = 0;
    
    function typeWriter() {
        if (index < text.length) {
            document.querySelector(".typing").innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, 100); // Velocidade de digitação
        }
    }
    function moveLeft() {
        const container = document.querySelector('.certifications-container');
        container.scrollBy({ left: -220, behavior: 'smooth' }); // Ajuste o valor de deslocamento conforme necessário
    }
    
    function moveRight() {
        const container = document.querySelector('.certifications-container');
        container.scrollBy({ left: 220, behavior: 'smooth' }); // Ajuste o valor de deslocamento conforme necessário
    }