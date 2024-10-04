$(document).ready(function() {
$('#formulario-registro').submit(function(event) {
    event.preventDefault(); 

    var password = $('#password').val();
    var confirmarPassword = $('#confirmar-password').val();
    var mensajeError = $('#mensaje-error');

    if (password !== confirmarPassword) {
        mensajeError.show(); 
    } else {
        mensajeError.hide(); 

        var nombre = $('#nombre').val();
        var mensaje = `Verifica tu informacion Recuerda que no hay cambios  luego de aceptar.`;
        $('#mensaje-confirmacion').text(mensaje);
        $('#confirmacion-registro').fadeIn();
    }
});
$('#btn-aceptar').click(function() {
    $('#confirmacion-registro').fadeOut();
    setTimeout(function() {
        $('#alerta-registro').fadeIn().delay(2000).fadeOut(function() {
            location.reload(); 
        });
    }, 500);
});

$('#btn-regresar').click(function() {
    $('#confirmacion-registro').fadeOut(); 
});
});