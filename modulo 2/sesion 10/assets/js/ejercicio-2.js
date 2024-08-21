// $(selector).action();

$(document).ready(function(){
    $('#registrarFormulario').submit(function(event){
        event.preventDefault();
        var form = $(this);

        if(form[0].checkValidity() === false) {
            event.stopPropagation();
        } else {
            alert("Formulario enviado no es correcto")
        }

        form.addClass('was-validated')

    });
});
