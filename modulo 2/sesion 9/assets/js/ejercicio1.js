document.addEventListener('DOMContentLoaded', function(){
    // selecciona un elemento por ID
    const elemento = document.getElementById('elemento');

    // cambiar contenido del html 
    elemento.textContent = 'Hello World'

    // cambiar el color y el texto del elemento 
    elemento.style.color = 'red'
    elemento.style.fontSize = '20px'
//
    elemento.addEventListener('click', function() {
        alert('Haz pinchado el elemento')
    })
})