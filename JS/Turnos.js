// Obtener el elemento del contenedor de botones
const container = document.getElementById('contenedor-botones');

// Obtener las reservas desde el almacenamiento local o inicializar un array vacío si no hay datos
let reservas = JSON.parse(localStorage.getItem('reservas')) || [];

// Función asincrónica para cargar datos desde un archivo JSON
const fetchData = async () => {
    try {

        const res = await fetch("../JSON/reservas.json");

        const data = await res.json();

        fetchTurnos(data);
    } catch (error) {

        console.error('Error al cargar datos:', error);
    }
}

// Función para mostrar los turnos en la página
function fetchTurnos(turnos) {
    turnos.forEach(el => {

        const reservado = reservas.some(reserva => reserva.horario === el.horario);

        const tr = document.createElement('tr');

        tr.innerHTML = `
            <tr class="table-success">
                <td><button id="${el.id}" class="btn btn-primary horario-btn">${el.horario}</button></td>
                <td>${el.disponible && !reservado ? 'disponible' : 'no disponible'}</td>
            </tr>
        `;

        container.appendChild(tr);

        const button = document.getElementById(`${el.id}`);
        // Deshabilitar el botón si no está disponible o ya está reservado
        if (!el.disponible || reservado) {
            button.setAttribute('disabled', 'true');
        }

        // Agregar un evento clic al botón para mostrar el modal de reserva
        button.addEventListener('click', () => mostrarModal(el.horario, el.id, reservado));
    });
}

// Función para mostrar el modal de reserva
function mostrarModal(horario, id, reservado) {

    const fecha = document.getElementById('fecha').value;
    if (!fecha) {
        // Mostrar un mensaje de error si no se ha seleccionado una fecha
        Swal.fire({
            title: 'Error',
            text: 'Debes seleccionar primero la fecha del turno.',
            icon: 'error',
            confirmButtonText: 'Aceptar',
        });
        return;
    }

    // Obtener elementos del formulario de reserva y el modal
    const formularioreserva = document.getElementById("formularioreservas");
    const modal = document.getElementById('myModal');

    $(modal).modal('show');

    // Agregar un evento clic al botón de reserva en el modal
    document.getElementById("reservarBtnModal").addEventListener("click", function () {

        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const obraSocial = document.getElementById('obraSocial').value;
        const telefono = document.getElementById('telefono').value;

        if (!nombre || !apellido || !obraSocial || !telefono) {
            // Mostrar un mensaje de error si no se completan todos los campos del formulario
            Swal.fire({
                title: 'Error',
                text: 'Debes completar todos los campos antes de reservar el turno.',
                icon: 'error',
                confirmButtonText: 'Aceptar',
            });
            return;
        }

        // Crear un objeto de reserva
        const reserva = {
            horario: horario,
            nombre: nombre,
            apellido: apellido,
            obraSocial: obraSocial,
            telefono: telefono
        };

        // Mostrar un mensaje de confirmación antes de reservar
        Swal.fire({
            title: '¿Estás seguro?',
            text: `Deseas reservar un turno a las ${horario} para ${nombre} ${apellido} con obra social ${obraSocial} y teléfono ${telefono} ? `,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, reservar'
        }).then((result) => {
            if (result.isConfirmed) {
                // Mostrar un mensaje de éxito después de la reserva
                Swal.fire(
                    '¡Reservado!',
                    'Tu turno ha sido reservado correctamente.',
                    'success'
                );
                // Ocultar el modal
                $('#myModal').modal('hide');

                // Agregar la reserva al array si no está reservado previamente
                if (!reservado) {
                    reservas.push(reserva);
                    // Actualizar los datos de reserva en el almacenamiento local
                    localStorage.setItem('reservas', JSON.stringify(reservas));
                }

                // Restablecer el formulario de reserva
                formularioreserva.reset();
                // Deshabilitar el botón de reserva en la tabla
                const button = document.getElementById(id);
                button.setAttribute("disabled", "true");
            }
        });
    });
}

// Cargar datos al cargar la página
fetchData();

