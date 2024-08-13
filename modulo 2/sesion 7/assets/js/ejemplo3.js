const horaDefinida = "21:00";
// Obtener la hora actual en formato 'HH:MM'
const horaActual = new Date().toTimeString().substring(0, 5); // Obtener 'HH:MM'
respuesta = ""

if(horaDefinida == horaActual){
    respuesta = "Es la hora de comer!!!"
} else {
    respuesta = "Aun no es hora de comer :c"
}

document.getElementById("hora-comida").innerHTML =
    respuesta;