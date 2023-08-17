let contraseña = "1234";
function login() {
  let ingresar = false;

  for (let i = 2; i >= 0; i--) {
    let userContraseña = prompt(
      "Ingresa la contraseña. Tenés " + (i + 1) + " " + "Oportunidades"
    );
    if (userContraseña === contraseña) {
      alert("Ingreso exitoso");
      ingresar = true;
      break;
    } else {
      alert("Error.Te quedan" + " " + i + "intentos");
    }
  }
  return ingresar;
}
console.log(login());

let exito = login();

// Definición de objetos
class Odontologo {
    constructor(nombre, especialidad, horario) {
      this.nombre = nombre;
      this.especialidad = especialidad;
      this.horario = horario;
    }
  }
  
  class Turno {
    constructor(id, paciente, fecha, hora, odontologo, obraSocial, costo) {
      this.id = id;
      this.paciente = paciente;
      this.fecha = fecha;
      this.hora = hora;
      this.odontologo = odontologo;
      this.obraSocial = obraSocial;
      this.costo = costo;
    }
  }
  
  // Variables
  let odontologos = [];
  let turnosOdontologicos = [];
  
  // Funciones esenciales
  function agregarOdontologo(nombre, especialidad, horario) {
    const nuevoOdontologo = new Odontologo(nombre, especialidad, horario);
    odontologos.push(nuevoOdontologo);
    console.log(`Odontólogo ${nombre} agregado.`);
  }
  
  function agregarTurno(paciente, fecha, hora, odontologo, obraSocial, costo) {
    const nuevoTurno = new Turno(turnosOdontologicos.length + 1, paciente, fecha, hora, odontologo, obraSocial, costo);
    turnosOdontologicos.push(nuevoTurno);
    console.log(`Turno para ${paciente} agendado.`);
  }
  
  function buscarTurnosPorOdontologo(nombreOdontologo) {
    return turnosOdontologicos.filter(turno => turno.odontologo.nombre.toLowerCase().includes(nombreOdontologo.toLowerCase()));
  }
  
  function calcularIngresosTotales() {
    return turnosOdontologicos.reduce((total, turno) => total + turno.costo, 0);
  }
  
  // Agregar objetos y realizar acciones
  agregarOdontologo("Dra. Martínez", "Odontología General", "Lunes a Viernes, 9:00 AM - 5:00 PM");
  agregarOdontologo("Dr. Gómez", "Ortodoncia", "Martes y Jueves, 10:00 AM - 7:00 PM");
  agregarTurno("Juan Pérez", "2023-08-15", "10:00 AM", odontologos[0], "OSDE", 800);
  agregarTurno("María López", "2023-08-16", "11:30 AM", odontologos[1], "Swiss Medical", 750);
  
  // Búsqueda de turnos por odontólogo
  const turnosDrGomez = buscarTurnosPorOdontologo("Gómez");
  console.log("Turnos del Dr. Gómez:", turnosDrGomez);
  
  // Cálculo de ingresos totales
  const ingresosTotales = calcularIngresosTotales();
  console.log("Ingresos totales:", ingresosTotales);
  