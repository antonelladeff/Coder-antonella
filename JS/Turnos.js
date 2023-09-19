const container = document.getElementById('contenedor-botones');
turnos.forEach(el => {
    const tr = document.createElement('tr');

    tr.innerHTML = `<tr class="table-success">
                    <td><button id="${el.id}" class="btn btn-primary horario-btn">${el.horario}</button></td>
                    <td>${el.disponible ? 'disponible' : 'no disponible'}</td>
                    </tr>`

    container.appendChild(tr);

    const button = document.getElementById(`${el.id}`);
    //button.setAttribute('class', `${el.disponible}`)
    if (!el.disponible) {
        button.setAttribute('disabled', 'true');
    }
    button.addEventListener('click', () => mostrarModal(el.horario))
    console.log(button);
})


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



// Verificar si hay una reserva guardada en localStorage al cargar la página
document.addEventListener('DOMContentLoaded', function () {
    const reservaGuardada = localStorage.getItem('reserva');

    if (reservaGuardada) {

    }
});


