
// FUNCIÓN PARA MOSTRAR MENSAJE DE CONFIRMACIÓN Y RETENER EL ENVÍO POR DEFECTO DEL FORMULARIO
document.getElementById('formDatos').addEventListener('submit', function(event) {
    event.preventDefault(); 
    mostrarMensajeConfirmacion();
});

// FUNCIÓN PARA MOSTRAR EL MENSAJE DE CONFIRMACIÓN 
function mostrarMensajeConfirmacion() {
    const mensajeConfirmacion = document.getElementById('mensajeConfirmacion');
    mensajeConfirmacion.style.display = 'block';
}




