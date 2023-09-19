const arrayUsuarios = []

// Capturamos el formulario
const inicioFormulario = document.getElementById("inicio")

// Función para mostrar errores en el formulario
const mostrarMensaje = (text) => {
    // Capturamos la etiqueta para donde mostraremos mensajes
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
    // Capturamos el input contraseña
    const contraseña = document.getElementById("password").value; // Capturamos la contraseña
    // Buscamos si hay algún usuario que coincida con el nombre que ingresaron
    const user = arrayUsuarios.find((user) => user.nombre === nombre);
    // Si existe el usuario, revisamos su contraseña
    if (user) {
        // Si la contraseña es correcta, se redirecciona a la página que queramos
        if (contraseña === user.password) { // Comparamos la contraseña
            // Guardar el nombre de usuario y contraseña en localStorage
            const loguedIn = {
                nombre: user.nombre,
                pass: user.password,
                isLogued: true,
            }
            localStorage.setItem("nombreUsuario", nombre);

            location.href = "./paginas/turnero.html";
        } else {
            // Si la contraseña es incorrecta, mostramos un mensaje
            mostrarMensaje("Contraseña incorrecta.");
        }
    } else {
        // Si no existe usuario, mostramos un mensaje
        mostrarMensaje("Usuario incorrecto.");
    }
});

function isLogueIn() {
    const loguedIn = JSON.parse(localStorange.getItem('isLogued'))
    if (loguedIn.isLogued) {
        location.href = "./paginas/turnero.html";
    } else {
        return;
    }
}
const fetchData = async () => {
    try {
        const res = await fetch('../JSON/usuarios.json');


        const data = await res.json();


        arrayUsuarios.push(...data)

    } catch (error) {
        console.error('Error al cargar datos:', error);
    }
}


window.addEventListener('load', () => {
    fetchData();
});