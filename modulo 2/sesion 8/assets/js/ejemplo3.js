// Buscar bebida en stock
function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

let bebidas = ["Limonada", "Jugo", "Te"]
bebida = capitalize(prompt('Ingrese bebida a buscar').toLowerCase())
contador = 0
msj = "La bebida no esta en nuestros registros"

do {
    if (bebidas[contador] === bebida) {
        msj = bebida + " esta en la posición: " + contador;
        contador = 3
    } 
    contador = contador + 1
} while(contador < 3)

document.getElementById("bebida").innerHTML = msj;