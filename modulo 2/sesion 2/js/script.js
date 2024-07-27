document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('msj').value;

    if (name && email && message) {
        document.getElementById('response').textContent = '¡Gracias, ' + name + '! Hemos recibido tu mensaje.';
    } else {
        document.getElementById('response').textContent = 'Por favor, completa todos los campos.';
    }
});