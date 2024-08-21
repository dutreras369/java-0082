// $(selector).action();
$(document).ready(function (){
    // definimos variables y elementos que contienen imagenes
 
    // contador que contiene las imagenes
    let index = 0;

    // Elemento que contiene las img
    let imgs = $('#carousel img');
 
    // Mostrar solo la primera imagen al inicio
    $(imgs[index]).addClass('active');
 
    // Eventos
    $('#next').click(function() {
        $(imgs[index]).removeClass('active');
        index = (index + 1) % imgs.length;
        $(imgs[index]).addClass('active');
    });
    $('#prev').click(function() {
        $(imgs[index]).removeClass('active');
        index = (index - 1 + imgs.length) % imgs.length;
        $(imgs[index]).addClass('active');
    });
});
