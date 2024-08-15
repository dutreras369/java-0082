// Buscar fruta en stock
function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

let frutas = ["Manzana", "Platano", "Mandarina"]
fruta = capitalize(prompt('Ingrese fruta a buscar').toLowerCase())
contador = 0
msj = "La fruta no esta en nuestros registros"

while(contador < 3 ){
    if (frutas[contador] === fruta) {
        msj = fruta + " esta en la posición: " + contador;
        contador = 3
    } 
    contador = contador + 1
}

document.getElementById("fruta").innerHTML = msj;
