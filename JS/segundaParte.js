// Array de pacientes (objetos)
let pacientes = [
  { nombre: "Ana", apellido: "García", telefono: "1234567890", turno: 1 },
  { nombre: "Luis", apellido: "Pérez", telefono: "9876543210", turno: 2 },
  { nombre: "María", apellido: "Martínez", telefono: "5555555555", turno: 3 }
];

// Función para agregar nuevo paciente al turno
function agregarPaciente() {
  const nombre = prompt("Ingrese el nombre del nuevo paciente:");
  const apellido = prompt("Ingrese el apellido del nuevo paciente:");
  const telefono = prompt("Ingrese el número de teléfono del nuevo paciente:");
  const paciente = { nombre, apellido, telefono, turno: turnoActual };
  pacientes.push(paciente);
  turnoActual++;
  alert(`Paciente ${nombre} ${apellido} agregado. Turno: ${paciente.turno}`);
}

// Función para buscar paciente por turno
function buscarPacientePorTurno() {
  const turno = parseInt(prompt("Ingrese el número de turno del paciente a buscar:"));
  const pacienteEnTurno = pacientes.find(paciente => paciente.turno === turno);
  if (pacienteEnTurno) {
    alert(`Paciente en turno ${turno}:\nNombre: ${pacienteEnTurno.nombre}\nApellido: ${pacienteEnTurno.apellido}\nTeléfono: ${pacienteEnTurno.telefono}`);
  } else {
    alert(`No hay paciente en el turno ${turno}`);
  }
}

// Función para filtrar pacientes por nombre
function filtrarPacientesPorNombre() {
  const nombre = prompt("Ingrese el nombre para filtrar pacientes:");
  const pacientesFiltrados = pacientes.filter(paciente => paciente.nombre === nombre);
  if (pacientesFiltrados.length > 0) {
    let listaPacientes = `Pacientes con nombre ${nombre}:\n`;
    pacientesFiltrados.forEach(paciente => {
      listaPacientes += `Turno ${paciente.turno}: ${paciente.nombre} ${paciente.apellido}\n`;
    });
    alert(listaPacientes);
  } else {
    alert(`No se encontraron pacientes con nombre ${nombre}`);
  }
}

// Función para atender al próximo paciente
function atenderProximoPaciente() {
  if (pacientes.length > 0) {
    const pacienteAtendido = pacientes.shift();
    alert(`Atendiendo a ${pacienteAtendido.nombre} ${pacienteAtendido.apellido} del turno ${pacienteAtendido.turno}`);
  } else {
    alert("No hay pacientes en espera.");
  }
}

// Función para mostrar la lista de pacientes
function mostrarListaPacientes() {
  console.log("Lista de pacientes:");
  pacientes.forEach(paciente => {
    console.log(`Turno ${paciente.turno}: ${paciente.nombre} ${paciente.apellido}`);
  });
}

// Llamar a la función para mostrar la lista de pacientes
mostrarListaPacientes();

// Interacción con el usuario
while (true) {
  const accion = prompt("¿Qué acción deseas realizar?\n1. Agregar paciente\n2. Buscar paciente por turno\n3. Filtrar pacientes por nombre\n4. Atender próximo paciente\n5. Mostrar lista de pacientes\n6. Salir");
  
  switch (accion) {
    case "1":
      agregarPaciente();
      break;
      
    case "2":
      buscarPacientePorTurno();
      break;
      
    case "3":
      filtrarPacientesPorNombre();
      break;
      
    case "4":
      atenderProximoPaciente();
      break;
      
    case "5":
      mostrarListaPacientes();
      break;
      
    case "6":
      console.log("Saliendo del programa.");
      break;
      
    default:
      alert("Opción inválida. Por favor, selecciona una opción válida.");
  }
}

