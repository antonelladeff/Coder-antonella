// Capturamos el formulario
const inicioFormulario = document.getElementById("inicio");

// Función para mostrar errores en el formulario
const mostrarMensaje = (title, text, type) => {
	Swal.fire(title, text, type);
};

// Agregamos el evento submit
inicioFormulario.addEventListener("submit", (e) => {
	// Prevenimos que se recargue la página
	e.preventDefault();
	// Capturamos el input nombre
	const nombre = document.getElementById("nombre").value;
	// Capturamos el input password
	const pass = document.getElementById("password").value;
	// Hacemos la petición de usuarios
	fetch("./usuarios.json")
		.then((response) => response.json())
		.then((users) => {
			// Buscamos si hay algún usuario que coincida con el nombre que ingresaron
			const user = users.find((user) => user.nombre === nombre);
			// Si existe el usuario, revisamos su contraseña
			if (user) {
				// Si la contraseña es correcta, se redirecciona a la página que queramos
				if (pass === user.password) {
					// Los datos son correctos, mostramos un mensaje
					mostrarMensaje(`¡Buen día, ${user.nombre}!`, "Redireccionando...", "success");
					// En un determinado tiempo lo redireccionamos
					setTimeout(() => {
						location.href = "../paginas/turnero.html";
					}, 1500);
				} else {
					// Si la contraseña es incorrecta, mostramos un mensaje
					mostrarMensaje("Error al iniciar sesión", "Contraseña incorrecta.", "error");
				}
			} else {
				// Si no existe usuario, mostramos un mensaje
				mostrarMensaje("Error al iniciar sesión", "Nombre incorrecto.", "error");
			}
		});
});