//1.- Crear el obejto skipper
let skipper = {
    nombre: 'Skipper'
};

//2.- Imprime el nombre del pingüino en consola, como si fuera un mensaje de bienvenida.
console.log("Hola, soy un pingüino y mi nombre es: ", skipper.nombre)

//3.- Escribe otra línea de código que añada una nueva propiedad a tu pingüino llamada puedeVolar y asignalo a falso. Nota: No modifiques el código original donde definiste a tu pingüino.
skipper.puedeVolar = true

//4.- Añade un método a tu pingüino llamado 'graznar' que muestre en consola: "kaww kaww!!" Nota: Sí, así suenan los pingüinos Nota de la Nota: No modifiques el código previo. Hazlo en una nueva línea de código.
skipper.graznar = () => {
    return "kaww kaww!!"
}

//5.- Añade otro método a tu pingüino llamado 'saludar' que imprima en consola el mismo mensaje que escribimos para la bienvenida. Esta vez, emplea la palabra reservada "this" para resolverlo.
skipper.saludar= function() {
    return "Hola, soy un pingüino y mi nombre es: "+ this.nombre
}

//6.- Sin modificar el código previo, cambia el nombre del pingüino a "Señor Pingu" y llama al método "saludar" para verificar que se ha aplicado el cambio correctamente.
skipper.nombre = "Señor Pingu"

//7.- Escribe otro método llamado 'volar'. Con este método imprime en consola el mensaje "¡Puedo volar!" si el pingüino tiene 'true' en su atributo 'puedeVolar'. De lo contrario, muestra el mensaje "No puedo volar :("
skipper.volar = function() {
    if(this.puedeVolar == true){
        return "¡Puedo volar!"
    }else{
        return "No puedo volar :("
    }
}

//8.- Cambia la propiedad "puedeVolar" de tu pingüino a "true". Manda a llamar el método 'volar' para verificar que el cambio se efectuó correctamente.

console.log(skipper.graznar())
console.log(skipper.saludar())//para nombre = skipper
console.log(skipper.saludar())//para nombre = señor pingu
console.log(skipper.volar())

