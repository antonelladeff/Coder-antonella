document.addEventListener("DOMContentLoaded", () => {
  const btnIniciarSesion = document.getElementById("btnIniciarSesion");
  const btnProgramarTurno = document.getElementById("btnProgramarTurno");
  const nombreUsuario = document.getElementById("nombreUsuario");
  const rolUsuario = document.getElementById("rolUsuario");
  const infoPaciente = document.getElementById("infoPaciente");
  const infoFecha = document.getElementById("infoFecha");
  const infoHora = document.getElementById("infoHora");

  // Evento para iniciar sesión
  btnIniciarSesion.addEventListener("click", () => {
    const usuario = document.getElementById("usuario").value;
    const contrasena = document.getElementById("contrasena").value;

    // Simulamos una autenticación exitosa
    const usuarioAutenticado = {
      id: 1,
      nombre: usuario,
      rol: "odontologo"
    };

    localStorage.setItem("usuario", JSON.stringify(usuarioAutenticado));
    mostrarInfoUsuario(usuarioAutenticado);
    mostrarFormularioTurno();
  });

  // Evento para programar turno
  btnProgramarTurno.addEventListener("click", () => {
    const nombrePaciente = document.getElementById("nombrePaciente").value;
    const edadPaciente = document.getElementById("edadPaciente").value;
    const fechaTurno = document.getElementById("fechaTurno").value;
    const horaTurno = document.getElementById("horaTurno").value;

    const pacienteTurno = {
      paciente: {
        nombre: nombrePaciente,
        edad: edadPaciente
      },
      fecha: fechaTurno,
      hora: horaTurno
    };

    localStorage.setItem("turno", JSON.stringify(pacienteTurno));
    mostrarInfoTurno(pacienteTurno);
  });

  // Función para mostrar información de usuario
  function mostrarInfoUsuario(usuario) {
    nombreUsuario.textContent = "Nombre: " + usuario.nombre;
    rolUsuario.textContent = "Rol: " + usuario.rol;
    document.getElementById("inicioSesion").style.display = "none";
    document.getElementById("infoUsuario").style.display = "block";
  }

  // Función para mostrar el formulario de turno
  function mostrarFormularioTurno() {
    document.getElementById("formularioTurno").style.display = "block";
  }

  // Función para mostrar información de turno
  function mostrarInfoTurno(turno) {
    infoPaciente.textContent = "Paciente: " + turno.paciente.nombre + " (Edad: " + turno.paciente.edad + ")";
    infoFecha.textContent = "Fecha: " + turno.fecha;
    infoHora.textContent = "Hora: " + turno.hora;
    document.getElementById("formularioTurno").style.display = "none";
    document.getElementById("infoTurno").style.display = "block";
  }

  // Verificar si el usuario está autenticado al cargar la página
  const usuarioGuardado = JSON.parse(localStorage.getItem("usuario"));
  if (usuarioGuardado) {
    mostrarInfoUsuario(usuarioGuardado);
    const turnoGuardado = JSON.parse(localStorage.getItem("turno"));
    if (turnoGuardado) {
      mostrarInfoTurno(turnoGuardado);
    } else {
      mostrarFormularioTurno();
    }
  }
});
