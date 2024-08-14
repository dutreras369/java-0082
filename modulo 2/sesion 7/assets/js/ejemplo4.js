
x = 11
respuesta = ""
// Validar valor dentro de un rango entre 1 y 10
if (x >= 1 && x <= 10) {
    respuesta = "El número esta dentro del rango [1 - 10]"
}
// Validar valor dentro de un rango entre 11 y 20
else if (x > 10 && x <= 20) {
    respuesta = "El número no esta dentro del rango [11 - 20]"
}
// Si no el valor esta fuera del rango definido
else {
    respuesta = "El número no esta dentro de los rangos definidos"
}

document.getElementById("rango").innerHTML =
    respuesta;

