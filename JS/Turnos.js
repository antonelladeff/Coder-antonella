
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
                    // Datos de reserva a enviar al servidor
                    const reservaData = {
                        nombre: nombre,
                        apellido: apellido,
                        obraSocial: obraSocial,
                        telefono: telefono,
                        horaSeleccionada: horaSeleccionada
                    };
        
                    // Realizar la solicitud AJAX usando fetch y promesas
                    sendReservation('/ruta/al/servidor', reservaData)
                        .then(data => {
                            // Verificar la respuesta del servidor y mostrar un mensaje de éxito o error
                            if (data.success) {
                                Swal.fire(
                                    '¡Reservado!',
                                    'Tu turno ha sido reservado correctamente.',
                                    'success'
                                );
                            } else {
                                Swal.fire(
                                    'Error',
                                    'Hubo un problema al reservar el turno. Inténtalo de nuevo más tarde.',
                                    'error'
                                );
                            }
        
                            // Cierra el modal después de la reserva
                            $('#myModal').modal('hide');
                        })
                        .catch(error => {
                            console.error('Error al realizar la solicitud AJAX:', error);
                            Swal.fire(
                                'Error',
                                'Hubo un problema al reservar el turno. Inténtalo de nuevo más tarde.',
                                'error'
                            );
                        });
                }
            });
        }
        
        function sendReservation(url, data) {
            return new Promise((resolve, reject) => {
                // Realizar la solicitud AJAX usando fetch
                fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                .then(response => {
                    if (!response.ok) {
                        reject(new Error('Hubo un problema al reservar el turno.'));
                    }
                    return response.json();
                })
                .then(data => resolve(data))
                .catch(error => reject(error));
            });
        }
        
        

       
    
