document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("formulario").addEventListener("submit", function (e) {
        e.preventDefault();

    // Limpiamos mensajes de error anteriores
    document.getElementById("errorNombre").textContent = "";
    document.getElementById("errorEmail").textContent = "";
    document.getElementById("errorEdad").textContent = "";

    let valido = true;

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const edadInput = document.getElementById("edad").value.trim();
    const edad = Number(edadInput);

    // Validar nombre
    if (nombre === "") {
    document.getElementById("errorNombre").textContent = "El nombre es obligatorio.";
    valido = false;
    }  
    // Validar email
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        document.getElementById("errorEmail").textContent = "El email es obligatorio.";
        valido = false;
    } else if (!regexEmail.test(email)) {
        document.getElementById("errorEmail").textContent = "El email no es válido.";
        valido = false;
    }

        // Validar edad
        if (edadInput === "") {
            document.getElementById("errorEdad").textContent = "La edad es obligatoria.";
            valido = false;
        } else if (isNaN(edad) || edad <= 18) {
            document.getElementById("errorEdad").textContent = "Debes tener más de 18 años.";
            valido = false;
        }
    });
});

