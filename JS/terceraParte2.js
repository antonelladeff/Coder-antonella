// Definir una matriz vacía para almacenar los usuarios registrados
const usuarios = [];

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

    // Verificamos si el usuario ya existe
    const usuarioExistente = usuarios.find((user) => user.nombre === nombre);

    if (usuarioExistente) {
        mostrarMensajeRegistro("El usuario ya existe.");
    } else {
        // Verificamos si las contraseñas coinciden
        if (contraseña !== confirmarContraseña) {
            mostrarMensajeRegistro("Las contraseñas no coinciden.");
        } else {
            // Registramos al nuevo usuario
            usuarios.push({
                nombre: nombre,
                correo: correo,
                password: contraseña, // Debes encriptar la contraseña en un entorno real
            });

            mostrarMensajeRegistro("Registro exitoso. Ahora puedes iniciar sesión.");
            registroForm.reset(); // Limpiar el formulario

            // Redirigir a la página de inicio de sesión después de un breve retraso (por ejemplo, 2 segundos)
            setTimeout(() => {
                window.location.href = "../index.html"; // 
            }, 2000); // 2000 milisegundos (2 segundos)
        }
    }
});

// Función para mostrar mensajes de registro
const mostrarMensajeRegistro = (text) => {
    const mensajesRegistro = document.createElement("div");
    mensajesRegistro.textContent = text;
    mensajesRegistro.classList.add("alert", "alert-success", "mt-3");
    document.body.appendChild(mensajesRegistro);

};
