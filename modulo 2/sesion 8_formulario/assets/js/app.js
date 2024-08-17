document.getElementById('myForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const alertContainer = document.getElementById('alert-container');

    const data = {
        name: name,
        email: email
    };

    try {
        console.log(data)
        const response = await fetch('https://6e0e-34-83-165-19.ngrok-free.app/api', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Error en el envío del formulario');
        }

        const result = await response.json();
        alertContainer.innerHTML = `
            <div class="alert alert-success" role="alert">
                Formulario enviado correctamente: ${result.message}
            </div>
        `;
    } catch (error) {
        alertContainer.innerHTML = `
            <div class="alert alert-danger" role="alert">
                Error al enviar el formulario: ${error.message}
            </div>
        `;
    }
});
