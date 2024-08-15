// Buscar dia de la semana
function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

let diasSemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"]
dia = capitalize(prompt('Ingrese dia a buscar').toLowerCase())

for (i = 0; i < 7; i++) {
    if (diasSemana[i] === dia) {
        document.getElementById("dia").innerHTML = dia + " esta en la posicion: " + i;
        break
    } else {
        document.getElementById("dia").innerHTML = "El dia es incorrecto ";
    }
}