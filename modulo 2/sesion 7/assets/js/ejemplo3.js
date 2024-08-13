// Condiciones 

horaDefinida = "21:05";
// Obtener la hora actual en formato 'HH:MM'
horaActual = new Date().toTimeString().substring(0, 5); // Obtener 'HH:MM'
respuesta = ""

if(horaDefinida == horaActual){
    respuesta = "Es la hora de comer!!!"
} else {
    respuesta = "Aun no es hora de comer :c"
}

document.getElementById("hora-comida").innerHTML =
    respuesta;