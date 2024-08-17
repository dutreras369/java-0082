dividendo = parseFloat(prompt('Ingrese dividendo'))
divisor = parseFloat(prompt('Ingrese divisor'))

function division(dividendo, divisor){
    try{
        if(divisor === 0){
            throw new Error('No se puede dividir por cero')
        }
        return dividendo / divisor
    } catch (error) {
        console.error("Ocurrio un error", error.message)
    }     
}

document.getElementById("division").innerHTML = division(dividendo, divisor);
