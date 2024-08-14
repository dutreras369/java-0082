// Hora definida en formato 'HH:MM'
let horaDefinida = "21:00";

// Obtener la hora actual en formato 'HH:MM'
let ahora = new Date();
let horaActual = ahora.toTimeString().substring(0, 5); // Obtener 'HH:MM'

// Función para comparar las horas
function compararHoras(hora1, hora2) {
    let [hora1H, hora1M] = hora1.split(':').map(Number);
    let [hora2H, hora2M] = hora2.split(':').map(Number);

    if (hora1H < hora2H || (hora1H === hora2H && hora1M < hora2M)) {
        return -1; // hora1 es menor que hora2
    } else if (hora1H > hora2H || (hora1H === hora2H && hora1M > hora2M)) {
        return 1; // hora1 es mayor que hora2
    } else {
        return 0; // hora1 es igual a hora2
    }
}

// Determinar la respuesta
let respuesta = "";
let resultadoComparacion = compararHoras(horaActual, horaDefinida);

if (resultadoComparacion === 0) {
    respuesta = "Es la hora de comer!!!";
} else if (resultadoComparacion === -1) {
    respuesta = "Aun no es hora de comer :c";
} else {
    respuesta = "Ya es hora de comer!";
}

// Mostrar la respuesta en el elemento con id 'hora-comida'
document.getElementById("hora-comida").innerHTML = respuesta;
