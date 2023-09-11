
// Agrega el código JavaScript aquí para manejar eventos de clic en los botones de horario
$(document).ready(function() {
    $('.horario-btn').click(function() {
        // Obtén el valor del horario
        var horario = $(this).text();
        // Obtén la fecha seleccionada
        var fecha = $('#fecha').val();
        // Puedes hacer lo que necesites con estos valores, como enviarlos a un servidor o mostrarlos en otra parte de la página
        console.log('Fecha seleccionada: ' + fecha);
        console.log('Horario seleccionado: ' + horario);
    });
});
