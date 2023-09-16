
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

        // Verifica si el botón está disponible antes de mostrar el modal
        if (disponibilidad === "Disponible") {
            mostrarModal(horario);
        }
    });
});

// Función para reservar el turno con confirmación usando Swal
function reservarTurno() {
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const obraSocial = document.getElementById("obraSocial").value;
    const telefono = document.getElementById("telefono").value;
    const horaSeleccionada = document.getElementById("horaSeleccionada").textContent;

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
        


      // Deshabilitar el botón y cambiar la disponibilidad a "No Disponible"
      const horarioSeleccionado = document.querySelector('.horario-btn.active');
      if (horarioSeleccionado) {
          horarioSeleccionado.disabled = true;
          horarioSeleccionado.parentNode.nextElementSibling.textContent = 'No Disponible';
      }
  }
});
}










