const persona = { nombre: "Samuel Muñoz", edad: "44", telefono: 927216463 };

// console.log(persona.nombre)
function obtenerPropiedad(objeto, propiedad){
    try{
        // Intentar ingresar a la propiedad
        if(!(propiedad in objeto)){
            throw new Error('No existe propiedad')
        }
        return objeto[propiedad];
    } catch (error) {
        // Obtener error y devolver un mensaje
        console.error("Ocurrio un error", error.message)
        return null;
    }     
};

// Obtener valor por pantalla 
propiedad = prompt("ingrese propiedad a buscar")
document.getElementById("obtener").innerHTML = obtenerPropiedad(persona, propiedad);