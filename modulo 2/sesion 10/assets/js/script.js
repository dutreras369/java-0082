// $(selector).action();
$(document).ready(function (){
    // definimos variables y elementos que contienen imagenes
 
    // contador que contiene las imagenes
    let currentImgIndex = 0;
    // Elemento que contiene las img
    let imgs = $('#carousel img');
 
    // Mostrar solo la primera imagen al inicio
    $(imgs[currentImgIndex]).addClass('active');
 
    // Eventos
    $('#next').click(function() {
        $(imgs[currentImgIndex]).removeClass('active');
        currentImgIndex = (currentImgIndex + 1) % imgs.length;
        $(imgs[currentImgIndex]).addClass('active');
    });
    $('#prev').click(function() {
        $(imgs[currentImgIndex]).removeClass('active');
        currentImgIndex = (currentImgIndex - 1 + imgs.length) % imgs.length;
        $(imgs[currentImgIndex]).addClass('active');
    });
});
