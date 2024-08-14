// Condiciones 

horaDefinida = "21:00";
// Obtener la hora actual en formato 'HH:MM'
horaActual = new Date().toTimeString().substring(0, 5); // Obtener 'HH:MM'
respuesta = ""

if(horaActual == horaDefinida ){
    respuesta = "Es la hora de colacion!!!"
} else {
    respuesta = "Aun no es hora de comer :c"
}

document.getElementById("hora-comida").innerHTML =
    respuesta;