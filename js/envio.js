document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Evita el envío tradicional del formulario
  
    // Obtén los valores de los campos del formulario
    var nombre = document.getElementById('nombre').value;
    var correo = document.getElementById('correo').value;
    var asunto = document.getElementById('asunto').value;
    var mensaje = document.getElementById('mensaje').value;
  
    // Validación simple
    if (nombre && correo && asunto && mensaje) {
      // Si todos los campos están completos, muestra el mensaje de éxito
      var successMessage = document.createElement('div');
      successMessage.id = 'success-message';
      successMessage.textContent = '¡Gracias por su apoyo!';
  
      // Agrega el mensaje al cuerpo de la página
      document.body.appendChild(successMessage);
  
      // Mostrar la notificación
      successMessage.style.display = 'block';
  
      // Hacer que la notificación desaparezca después de 3 segundos
      setTimeout(function() {
        successMessage.style.opacity = '0'; // Hace que se desvanezca
      }, 2000); // Tiempo antes de que comience a desvanecerse
  
      // Elimina la notificación después de que se desvanezca
      setTimeout(function() {
        successMessage.remove();
      }, 3000); // Tiempo total que estará visible (2 segundos de fade y 1 segundo después)
  
      // Limpiar el formulario
      document.getElementById('contact-form').reset();
    } else {
      // Si algún campo falta, muestra una alerta
      alert('Por favor, complete todos los campos.');
    }
  });
  