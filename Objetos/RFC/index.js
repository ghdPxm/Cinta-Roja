const Persona = require('./Persona');

let Gerardo = new Persona("Gerardo", "", "Hernandez", "Diaz", "07-11-86", 33, "HEDG8611073I4", "Masculino", 95, 1.85)

console.log("El IMC de ", Gerardo.getPrimerNombre(), " es: ", Math.ceil( Gerardo.calcularIMC() ) )
console.log( Gerardo.esMayorDeEdad() )

console.log("RFC: ", Gerardo.generarRFC() )

