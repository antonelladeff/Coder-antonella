// Capturamos el formulario de registro
const registroForm = document.getElementById("registroForm");


// Agregamos el evento submit para el formulario de registro
registroForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Capturamos los valores del formulario
    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const contraseña = document.getElementById("contraseña").value;
    const confirmarContraseña = document.getElementById("confirmar_contraseña").value;

    // Verificamos si el usuario ya existe en localStorage
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    const usuarioExistente = usuarios.find((user) => user.nombre === nombre);

    if (usuarioExistente) {
        mostrarMensajeRegistro("El usuario ya existe.");
    } else {
        // Verificamos si las contraseñas coinciden
        if (contraseña !== confirmarContraseña) {
            mostrarMensajeRegistro("Las contraseñas no coinciden.");
        } else {
            // Registramos al nuevo usuario
            const nuevoUsuario = {
                nombre: nombre,
                correo: correo,
                password: contraseña,
            };

            usuarios.push(nuevoUsuario);

            // Actualizamos los usuarios en localStorage
            localStorage.setItem('usuarios', JSON.stringify(usuarios));
            mostrarMensajeRegistro("Registro exitoso. Ahora puedes iniciar sesión.");
            registroForm.reset(); // Limpiar el formulario después de un registro exitoso

            // Redirigir a la página de inicio de sesión después de un breve retraso
            setTimeout(() => {
                window.location.href = "../index.html";
            }, 2000); // 2000 milisegundos (2 segundos)

        }
    }
});

// Función para mostrar mensajes de registro
function mostrarMensajeRegistro(mensaje) {
    const mensajeRegistro = document.getElementById("mensajeRegistro");
    mensajeRegistro.textContent = mensaje;
}
