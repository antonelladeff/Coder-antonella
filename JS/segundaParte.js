//segunda parte del proyecto

//Definir una clase para representar pacientes
class Paciente {
  constructor(nombre, apellido, telefono, turno) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.telefono = telefono;
    this.turno = turno;
  }

  // Método personalizado para mostrar información del paciente
  mostrarInfo() {
    return `Turno ${this.turno}: ${this.nombre} ${this.apellido}\nTeléfono: ${this.telefono}`;
  }
}

// Array para almacenar pacientes
let pacientes = [];
let turnoActual = 0;

// Función para agregar un nuevo paciente
function agregarPaciente() {
  turnoActual++;
  const nombre = prompt("Ingrese el nombre del nuevo paciente:");
  const apellido = prompt("Ingrese el apellido del nuevo paciente:");
  const telefono = prompt("Ingrese el número de teléfono del nuevo paciente:");

  const paciente = new Paciente(nombre, apellido, telefono, turnoActual);

  // Agrega el paciente al array de pacientes
  pacientes.push(paciente);

  alert(`Paciente ${nombre} ${apellido} agregado. Turno: ${paciente.turno}`);
}

// Función para mostrar la lista de pacientes
function mostrarListaPacientes() {
  let listaPacientes = "Lista de pacientes:\n";
  for (const paciente of pacientes) {
    listaPacientes += paciente.mostrarInfo() + "\n";
  }

  alert(listaPacientes);
}

// Función para buscar un paciente por número de turno
function buscarPacientePorTurno() {
  const turno = parseInt(prompt("Ingrese el número de turno del paciente a buscar:"));
  const pacienteEnTurno = pacientes.find(paciente => paciente.turno === turno);


  if (pacienteEnTurno) {
    alert(`Paciente en turno ${turno}:\n${pacienteEnTurno.mostrarInfo()}`);
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
    for (const paciente of pacientesFiltrados) {
      listaPacientes += paciente.mostrarInfo() + "\n";
    }
    alert(listaPacientes);
  } else {
    alert(`No se encontraron pacientes con nombre ${nombre}`);
  }
}

// Creación de un array de objetos (productos)
const productos = [
  { id: 1, nombre: "Limpieza", precio: 5000 },
  { id: 2, nombre: "Extracción", precio: 8000 }
];

function mostrarProductos() {
  let listaProductos = "Lista de productos:\n";
  for (const producto of productos) {
    listaProductos += `ID ${producto.id}: ${producto.nombre} - Precio: $${producto.precio}\n`;
  }
  alert(listaProductos);
}

// Combinación de objetos y arrays
function agregarProductoAPaciente() {
  mostrarListaPacientes();
  const pacienteIndex = parseInt(prompt("Ingrese el índice del paciente al que desea agregar un producto:"));
  mostrarProductos();
  const productoIndex = parseInt(prompt("Ingrese el índice del producto que desea agregar al paciente:"));

  if (pacienteIndex >= 0 && pacienteIndex < pacientes.length && productoIndex >= 0 && productoIndex < productos.length) {
    const paciente = pacientes[pacienteIndex];
    const producto = productos[productoIndex];

    if (!paciente.productos) {
      paciente.productos = [];
    }
    paciente.productos.push(producto);
    alert(`Producto ${producto.nombre} agregado al paciente ${paciente.nombre} ${paciente.apellido}`);
  } else {
    alert("Índices inválidos. Asegúrese de ingresar índices válidos.");
  }
}

// Interacción con el usuario
let continuar = true;
while (continuar) {
  const accion = parseInt(prompt("¿Qué deseas realizar?\n1. Agregar paciente\n2. Mostrar lista de pacientes\n3. Buscar paciente por turno\n4. Filtrar pacientes por nombre\n5. Mostrar lista de productos\n6. Agregar producto a paciente\n7. Salir"));

  switch (accion) {
    case 1:
      agregarPaciente();
      break;

    case 2:
      mostrarListaPacientes();
      break;

    case 3:
      buscarPacientePorTurno();
      break;

    case 4:
      filtrarPacientesPorNombre();
      break;

    case 5:
      mostrarProductos();
      break;

    case 6:
      agregarProductoAPaciente();
      break;

    case 7:
      continuar = false;
      alert("Saliendo del programa.");
      break;

    default:
      alert("Opción inválida. Por favor, selecciona una opción válida.");
  }
}
