// Define la función para cerrar la sesión y redirigir
function cerrarSesion() {
    // Realiza cualquier tarea necesaria para cerrar la sesión aquí

    window.location.href = "../index.html";
}

// Agrega un listener de eventos al botón
document.getElementById("cerrarSesionBtn").addEventListener("click", cerrarSesion);

