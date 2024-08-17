dividendo = parseFloat(prompt('Ingrese dividendo'))
divisor = parseFloat(prompt('Ingrese divisor'))

function division(x, y){
    try{
        if(y === 0){
            throw new Error('No se puede dividir por cero')
        }

        let resultado = x / y
        return resultado
    } catch (error) {
        console.error("Ocurrio un error", error.message)
    }     
}

document.getElementById("division").innerHTML = division(dividendo, divisor);
