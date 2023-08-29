// Capturamos el formulario
const inicioFormulario = document.getElementById("inicio");

// Función para mostrar errores en el formulario
const mostrarMensaje = (text) => {
	// Capturamos la etiqueta p donde mostraremos mensajes
	const mensajes = document.getElementById("mensajes");
	mensajes.textContent = text;
	mensajes.classList.remove("hide");
	setTimeout(() => {
		mensajes.textContent = "";
		mensajes.classList.add("hide");
	}, 2000);
};

// Agregamos el evento submit
inicioFormulario.addEventListener("submit", (e) => {
	// Prevenimos que se recargue la página
	e.preventDefault();
	// Capturamos el input nombre
	const nombre = document.getElementById("nombre").value;
	// Capturamos el input password
	const pass = document.getElementById("password").value;
	// Buscamos si hay algún usuario que coincida con el nombre que ingresaron
	const user = usuarios.find((user) => user.nombre === nombre);
	// Si existe el usuario, revisamos su contraseña
	if (user) {
		// Si la contraseña es correcta, se redirecciona a la página que queramos
		if (pass === user.password) {
			location.href = "./index.html";
		} else {
			// Si la contraseña es incorrecta, mostramos un mensaje
			mostrarMensaje("Contraseña incorrecta.");
		}
	} else {
		// Si no existe usuario, mostramos un mensaje
		mostrarMensaje("Nombre incorrecto.");
	}
});