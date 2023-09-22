const arrayUsuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

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
    const nombre = document.getElementById("nombre").value;
    const contraseña = document.getElementById("password").value;
    const user = arrayUsuarios.find((user) => user.nombre === nombre);
    // Si existe el usuario, revisamos su contraseña
    if (user) {
        if (contraseña === user.password) {
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
        location.href = ".//paginas/turnero.html";
    } else {
        return;
    }
}
const fetchData = async () => {
    try {
        const res = await fetch('./JSON/usuarios.json')

        const data = await res.json();


        arrayUsuarios.push(...data)

        if (!localStorage.getItem('usuarios')) {
            localStorage.setItem('usuarios', JSON.stringify(data));
        }

    } catch (error) {
        console.error('Error al cargar datos:', error);
    }
}


window.addEventListener('load', () => {
    fetchData();
});