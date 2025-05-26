document.addEventListener('DOMContentLoaded', function() {
    // obtenemos los elementos necesarios
    const btnResaltar = document.getElementById('btnResaltar');
    const btnOcultar = document.getElementById('btnOcultar');
    const parrafos = document.querySelectorAll('.parrafo');
    
    // añadimos evento para resaltar párrafos
    btnResaltar.addEventListener('click', function() {
        parrafos.forEach(function(parrafo) {
            // añadimos la clase 'resaltado' a cada párrafo
            parrafo.classList.add('resaltado');
        });
    });
    
    // añadimos evento para mostrar/ocultar párrafos
    btnOcultar.addEventListener('click', function() {
        parrafos.forEach(function(parrafo) {
            // alternamos la clase 'oculto' en cada párrafo
            parrafo.classList.toggle('oculto');
        });
    });
});