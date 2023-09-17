
// Función para mostrar el modal con los datos seleccionados
function mostrarModal(horario) {
    // Establece el valor del campo de tiempo en el modal
    document.getElementById("horaSeleccionada").textContent = horario;
    // Abre el modal
    $('#myModal').modal('show');
}

// Agrega un evento de clic a los botones de horario
const horarioButtons = document.querySelectorAll(".horario-btn");
horarioButtons.forEach(button => {
    button.addEventListener("click", function () {
        const horario = this.textContent;
        const disponibilidad = this.parentNode.nextElementSibling.textContent;

        // Muestra la ventana modal de confirmación usando Swal
        Swal.fire({
            title: '¿Estás seguro?',
            text: `Deseas reservar un turno a las ${horaSeleccionada} para ${nombre} ${apellido} con obra social ${obraSocial} y teléfono ${telefono}?`,
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
            
                // Cierra el modal después de la reserva
                $('#myModal').modal('hide');
            }
            // Verifica si el botón está disponible antes de mostrar el modal
            if (disponibilidad === "Disponible") {
                // Guarda una referencia al botón seleccionado
                const horarioSeleccionado = this;

                // Muestra el modal y asigna el horario seleccionado
                mostrarModal(horario);

                // Asigna el horario seleccionado al elemento oculto en el modal
                document.getElementById("horaSeleccionada").textContent = horario;


                // Agrega un evento de clic al botón de reserva dentro del modal
                document.getElementById("reservarBtnModal").addEventListener("click", function () {
                    // Resto del código para reservar el turno

                    // Deshabilita el botón de horario seleccionado
                    horarioSeleccionado.setAttribute("disabled", "true");
                    horarioSeleccionado.textContent = horarioSeleccionado.textContent + " (Reservado)";
                });
            }
        });
    })


});





