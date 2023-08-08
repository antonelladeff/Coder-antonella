// Registrarme //

let turno = "";
function identificarDatos() {
    const usuarioCorrecto = "Antonella";
    let usuarioIngresado = prompt("Ingrese su usuario");

    while (usuarioIngresado !== usuarioCorrecto) {
        alert("El usuario ingresado no es correcto. Por favor ingréselo nuevamente.");
        usuarioIngresado = prompt("Ingrese su usuario");
    }

    const contraseniaCorrecta = "contrasenia12";
    let contraseniaIngresada = prompt("Ingrese su contraseña");

    while (contraseniaIngresada !== contraseniaCorrecta) {
        alert("La contraseña ingresada no es correcta. Por favor ingrésela nuevamente.");
        contraseniaIngresada = prompt("Ingrese su contraseña");
    }

    // Bienvenidos //
    alert("Inicio de sesión exitoso. ¡Bienvenido a mi turno online " + usuarioIngresado + "!");
}

identificarDatos();

// Primera Eleccion
let eleccion1;
while (true) {
    eleccion1 = prompt("Desea solicitar un turno para consulta? (si/no)").toLowerCase();
    if (eleccion1 === "si" || eleccion1 === "no") {
        break;
    } else {
        console.log(eleccion1);
        alert("Respuesta inválida. Por favor, responda 'si' o 'no'.");
    }
}

if (eleccion1 === "si") {
    console.log(eleccion1);
    alert("Complete sus datos");
    let apellido = prompt("Ingrese su Apellido y Nombre");
    alert(`Turno: ${apellido}`);
    let coberturaMedica = prompt("Ingrese cobertura médica");
    alert(`Cobertura médica: ${coberturaMedica}`);
    let numerotelefonico = prompt("Ingrese número de teléfono");
    alert(`Número de teléfono: ${numerotelefonico}`);
    obtenerTurno();
}

// Segunda Eleccion
else if (eleccion1 === "no") {
    console.log(eleccion1);
    alert("Gracias por contactarse con B&B odontología. Lo esperamos pronto");
}
// primer parte selecciona el dia y horario del turno.
function obtenerTurno() {
    let diaSemana;
    let horario;
    let mensajeHorario;
  
    while (true) {
      diaSemana = prompt(`Seleccione el día de la semana para el turno:
        1 - Lunes
        2 - Martes
        3 - Miércoles
        4 - Jueves
        5 - Viernes`);
  
      switch (diaSemana) {
        case "1":
          mensajeHorario = "Horario disponibles:\n1 - 10:00hs";
          break;
        case "2":
          mensajeHorario = "Horario disponibles:\n1 - 08:00hs";
          break;
        case "3":
          mensajeHorario = "Horario disponibles:\n1 - 13:00hs";
          break;
        case "4":
          mensajeHorario = "Horario disponibles:\n1 - 9:30hs";
          break;
        case "5":
          mensajeHorario = "Horario disponibles:\n1 - 10:30hs";
          break;
        default:
          alert("No ha elegido una opción válida. Por favor, seleccione un día válido (del 1 al 5).");
          continue; // Reinicia el ciclo y muestra el prompt nuevamente.
      }
  
      horario = prompt(mensajeHorario);
  
      switch (horario) {
        case "1":
          alert(`Turno reservado para el día lunes 10:00hs.`);
          break;
        case "2":
          alert(`Turno reservado para el día martes 08:00hs.`);
          break;
        case "3":
          alert(`Turno reservado para el día miércoles 13:00hs.`);
          break;
        case "4":
          alert(`Turno reservado para el día jueves 9:30hs.`);
          break;
        case "5":
          alert(`Turno reservado para el día viernes 10:30hs.`);
          break;
        default:
          alert("No ha elegido una opción válida. Por favor, seleccione un horario válido (del 1 al 5).");
      }
  
      // Sale del ciclo while si el usuario seleccionó un día y horario válidos.
      break;
    }
  
    // Parte 2: Elegir tratamientos y calcular el costo total
    let totalCosto = 0;
    while (true) {
      const tratamientoSeleccionado = prompt(`Seleccione un tratamiento:
        1 - Limpieza dental ($50)
        2 - Extracción dental ($100)
        3 - Relleno dental ($150)
        0 - Terminar de agregar tratamientos`);
  
      const tratamientoNumero = parseInt(tratamientoSeleccionado);
  
      switch (tratamientoNumero) {
        case 1:
          totalCosto += 50;
          alert("Tratamiento Limpieza dental agregado.");
          break;
        case 2:
          totalCosto += 100;
          alert("Tratamiento Extracción dental agregado.");
          break;
        case 3:
          totalCosto += 150;
          alert("Tratamiento Relleno dental agregado.");
          break;
        case 0:
          // Si elige 0, sale del ciclo de selección de tratamientos.
          break;
        default:
          alert("No ha elegido una opción válida para el tratamiento. Por favor, seleccione una opción válida (del 1 al 3 o 0 para terminar).");
      }
  
      // Si elige 0, sale del ciclo de selección de tratamientos.
      if (tratamientoNumero === 0) {
        break;
      }
    }
  
    // Mostramos el resumen del costo
    alert(`Costo Total:${totalCosto}`);
  
    alert("Gracias por contactarse con B&B odontología. Lo esperamos pronto.");
  }
  

  