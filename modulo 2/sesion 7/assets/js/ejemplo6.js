// Hora definida en formato entero (solo horas)
let horaDefinida = 22;

// Obtener la hora actual en formato entero (solo horas)
let ahora = new Date();
let horaActual = ahora.getHours();

// Función para comparar las horas
function compararHoras(hora1, hora2) {
    if (hora1 < hora2) {
        return -1; // hora1 es menor que hora2
    } else if (hora1 > hora2) {
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

// Mostrar la respuesta en el elemento con id termino-clase'
document.getElementById("termino-clase").innerHTML = respuesta;