// Expendedora de bebidas
bebida = prompt('Ingrese bebida')

switch (bebida) {
    case '1':
        respuesta = 'Jugo'
        break;
    case '2':
        respuesta = 'Agua mineral'
        break;
    case '3':
        respuesta = 'Bebida'
        break;
    default:
        respuesta = 'Valor invalido'
        break;
}

document.getElementById("bebida").innerHTML =
    respuesta;