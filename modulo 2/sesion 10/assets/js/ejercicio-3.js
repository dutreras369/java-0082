// $(selector).action();

$(document).ready(function () {
    $("#registrarFormulario").validate({
        rules: {
            username: {
                required: true,
                minlength: 6
            },

            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 8,
                pattern: "(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            },
            confirmPassword: {
                required: true,
                equalTo: "#password"
            }
        },
        messages: {
            username: {
                required: "Por favor ingresa un nombre de usuario.",
                minlength: "Tu nombre de usuario debe contener al menos 6 caracteres."
            },
            email: "Por favor ingresa una dirección de correo válida.",
            password: {
                required: "Por favor ingresa una contraseña.",
                minlength: "Tu contraseña debe tener al menos 8 caracteres."
            },
            confirmPassword: {
                required: "Por favor confirma tu contraseña.",
                equalTo: "Las contraseñas no coinciden."
            }
        },
        errorClass: "is-invalid", validClass: "is-valid",
        errorPlacement: function (error, element) { element.next('.invalid-feedback').html(error.text()); },
        highlight: function (element) { $(element).addClass('is-invalid').removeClass('is-valid'); },
        unhighlight: function (element) { $(element).removeClass('is-invalid').addClass('is-valid'); },
        submitHandler: function (form) { alert('Formulario enviado correctamente!'); form.submit(); }
    });
});