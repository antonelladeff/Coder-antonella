// Registrarme //
// Función para obtener un dato válido (usuario, contraseña, etc.)
function obtenerDato(mensaje) {
  let dato;
  do {
    dato = prompt(mensaje);
  } while (!dato);
  return dato;
}
// Función para identificar al usuario
function identificarDatos() {
  const usuarioCorrecto = "Antonella";
  const contraseniaCorrecta = "contrasenia12";
  let usuarioIngresado = obtenerDato("Ingrese su usuario");
  while (usuarioIngresado !== usuarioCorrecto) {
    alert(
      "El usuario ingresado no es correcto. Por favor ingréselo nuevamente."
    );
    usuarioIngresado = obtenerDato("Ingrese su usuario");
  }
  let contraseniaIngresada = obtenerDato("Ingrese su contraseña");
  while (contraseniaIngresada !== contraseniaCorrecta) {
    alert(
      "La contraseña ingresada no es correcta. Por favor ingrésela nuevamente."
    );
    contraseniaIngresada = obtenerDato("Ingrese su contraseña");
  }
  alert(
    "Inicio de sesión exitoso. ¡Bienvenido a mi turno online " +
    usuarioIngresado +
    "!"
  );
}
// Primera Eleccion
function primeraEleccion() {
  const eleccion1 = prompt(
    "Desea solicitar un turno para consulta? (si/no)"
  ).toLowerCase();
  if (eleccion1 === "si") {
    alert("Complete sus datos");
    const apellido = obtenerDato("Ingrese su Apellido y Nombre");
    alert(`Turno: ${apellido}`);
    const coberturaMedica = obtenerDato("Ingrese cobertura médica");
    alert(`Cobertura médica: ${coberturaMedica}`);
    const numerotelefonico = obtenerDato("Ingrese número de teléfono");
    alert(`Número de teléfono: ${numerotelefonico}`);
    obtenerTurno();
  } else if (eleccion1 === "no") {  // Segunda Eleccion 
    alert("Gracias por contactarse con B&B odontología. Lo esperamos pronto");
  } else {
    alert("Respuesta inválida. Por favor, responda 'si' o 'no'.");
    primeraEleccion();
  }
}
//selecciona el dia y horario del turno.
function obtenerTurno() {
  let diaSemana;
  do {
    const diaSeleccionado =
      prompt(`Seleccione el día de la semana para el turno:
      1 - Lunes
      2 - Martes
      3 - Miércoles
      4 - Jueves
      5 - Viernes`);
    switch (diaSeleccionado) {
      case "1":
        diaSemana = "Lunes (10:00hs)";
        break;
      case "2":
        diaSemana = "Martes (08:00hs)";
        break;
      case "3":
        diaSemana = "Miércoles (13:00hs)";
        break;
      case "4":
        diaSemana = "Jueves (9:30hs)";
        break;
      case "5":
        diaSemana = "Viernes (10:30hs)";
        break;
      default:
        alert(
          "No ha elegido una opción válida. Por favor, seleccione un día válido (del 1 al 5)."
        );
        diaSemana = null;
    }
  } while (!diaSemana);
  alert(`Turno reservado para el día ${diaSemana}.`);
  // Elegir tratamientos y calcular el costo total
  let totalCosto = 0;
  let continuarAgregandoTratamientos = true;
  while (continuarAgregandoTratamientos) {
    const tratamientoSeleccionado = parseInt(
      prompt(`Seleccione un tratamiento:
      1 - Limpieza dental ($50)
      2 - Extracción dental ($100)
      3 - Relleno dental ($150)
      0 - Terminar de agregar tratamientos`)
    );
    switch (tratamientoSeleccionado) {
      case 0:
        continuarAgregandoTratamientos = false;
        break;
      case 1:
        totalCosto += 50;
        alert(`Tratamiento agregado. Costo actual: $${totalCosto}`);
        break;
      case 2:
        totalCosto += 100;
        alert(`Tratamiento agregado. Costo actual: $${totalCosto}`);
        break;
      case 3:
        totalCosto += 150;
        alert(`Tratamiento agregado. Costo actual: $${totalCosto}`);
        break;
      default:
        alert(
          "No ha elegido una opción válida para el tratamiento. Por favor, seleccione una opción válida (del 1 al 3 o 0 para terminar)."
        );
    }
  }
  alert(`Costo Total: $${totalCosto}`);
  alert("Gracias por contactarse con B&B odontología. Lo esperamos pronto.");
}
// Ejecutar las funciones
identificarDatos();
primeraEleccion();


//abstraccion resumir un grupo complejo de instrucciones bajo una palabra clave que generalmente es una function



//dependiendo del dia veo que ropa llevo 



