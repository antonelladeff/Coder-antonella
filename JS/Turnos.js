// Función para mostrar el modal con los datos seleccionados
function mostrarModal(horario) {
    // Obtener la fecha seleccionada
    const fecha = document.getElementById('fecha').value;

    if (!fecha) {
        // Si la fecha no está seleccionada, muestra un mensaje de error
        Swal.fire({
            title: 'Error',
            text: 'Debes seleccionar primero la fecha del turno.',
            icon: 'error',
            confirmButtonText: 'Aceptar',
        });
        return;
    }

    // Establece el valor del campo de tiempo en el modal
    document.getElementById("horaSeleccionada").textContent = horario;
    // Abre el modal
    $('#myModal').modal('show');

    const formularioreserva = document.getElementById("formularioreservas")




    // Agrega un evento de clic al botón de reserva dentro del modal
    document.getElementById("reservarBtnModal").addEventListener("click", function () {
        // Obtener los valores de los campos de input dentro del modal
        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const obraSocial = document.getElementById('obraSocial').value;
        const telefono = document.getElementById('telefono').value;

        if (!nombre || !apellido || !obraSocial || !telefono) {
            // Si alguno de los campos no está completo, muestra un mensaje de error
            Swal.fire({
                title: 'Error',
                text: 'Debes completar todos los campos antes de reservar el turno.',
                icon: 'error',
                confirmButtonText: 'Aceptar',
            });
            return;
        }

        // Crear un objeto con los datos de la reserva
        const reserva = {
            horario: horario,
            nombre: nombre,
            apellido: apellido,
            obraSocial: obraSocial,
            telefono: telefono
        };


        // Muestra la ventana modal de confirmación usando Swal
        Swal.fire({
            title: '¿Estás seguro?',
            text: `Deseas reservar un turno a las ${horario} para ${nombre} ${apellido} con obra social ${obraSocial} y teléfono ${telefono}?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, reservar'
        }).then((result) => {
            if (result.isConfirmed) {
                // Mostrar mensaje de éxito con Swal
                Swal.fire(
                    '¡Reservado!',
                    'Tu turno ha sido reservado correctamente.',
                    'success'
                );

                $('#myModal').modal('hide');
                // Guardar la reserva en localStorage
                localStorage.setItem('reserva', JSON.stringify(reserva));
                formularioreserva.reset(); // Limpiar el formulario después de un registro exitoso
                // Deshabilita el botón de horario seleccionado
                horarioSeleccionado.setAttribute("disabled", "true");

            }
        });
    });
}

// Declarar la variable horarioSeleccionado fuera de la función forEach
let horarioSeleccionado;

// Agrega un evento de clic a los botones de horario
const horarioButtons = document.querySelectorAll(".horario-btn");
horarioButtons.forEach(button => {
    button.addEventListener("click", function () {
        const horario = this.textContent;
        const disponibilidad = this.parentNode.nextElementSibling.textContent;

        // Verifica si el botón está disponible antes de mostrar el modal
        if (disponibilidad === "Disponible") {
            // Guarda una referencia al botón seleccionado
            horarioSeleccionado = this;

            // Muestra el modal y asigna el horario seleccionado
            mostrarModal(horario);
        }
    });
});

// Verificar si hay una reserva guardada en localStorage al cargar la página
document.addEventListener('DOMContentLoaded', function () {
    const reservaGuardada = localStorage.getItem('reserva');

    if (reservaGuardada) {
        // Puedes realizar acciones adicionales aquí si es necesario
        // Por ejemplo, llenar campos del formulario con los datos de la reserva.
    }
});


