// Hora definida en formato entero (solo horas)
let horaDefinida = 21;
console.log("Hora definida: " + horaDefinida)

// Obtener la hora actual en formato entero (solo horas)
let horaActual = new Date().getHours();
console.log("Hora actual: " + horaActual)

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
console.log("Resultado de la comparacion: " + resultadoComparacion)

if (resultadoComparacion === 0) {
    respuesta = "Es la hora de salir!!!";
} else if (resultadoComparacion === -1) {
    respuesta = "Aun no es hora de salir :c";
} else {
    respuesta = "Estamos en el tiempo extra!";
}

// Mostrar la respuesta en el elemento con id termino-clase'
document.getElementById("termino-clase").innerHTML = respuesta;