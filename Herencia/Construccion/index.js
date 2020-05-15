/* 4.- Crear la clase construcción que hereda a otras dos
    clases "casa" y "edificio".
    a. Sus atributos son: numPuertas, numVentanas, numPisos,
       direccion, altura, largo y ancho del terreno.
    b. Cada uno tiene un metodo que regresa los metros
       cuadrados
    c. Un metodo debe regresar la direccion
    d. Un metodo debe permitir modificar la direccion
    e. Buscar la mejor manera de aprovechar la herencia */

const Casa = require('./Casa')
const Edificio = require('./Edificio')
const Constructora = require('./Constructora')

let Cabana = new Casa( 2, 8, 1, 'Las Lomas', 4, 15, 18 )
let Torre = new Edificio(4, 45, 12, 'Colonia Centenario', 125, 22, 25 )

let LaMeraMera = new Constructora( 'La Mera Mera' )

console.log( LaMeraMera.construir( Cabana ) )
console.log( LaMeraMera.calcularMetrosCuadrados( Cabana ) )
console.log( LaMeraMera.optenerDireccion( Cabana ) )
console.log( LaMeraMera.cambiarDireccion(Cabana, 'Las Flores' ) )
console.log( LaMeraMera.optenerDireccion( Cabana ) )
console.log( '----------------------------------------------------' )
console.log( LaMeraMera.construir( Torre ) )
console.log( LaMeraMera.calcularMetrosCuadrados( Torre ) )
console.log( LaMeraMera.optenerDireccion( Torre ) )
console.log( LaMeraMera.cambiarDireccion(Torre, 'Las Palmas' ) )
console.log( LaMeraMera.optenerDireccion( Torre ) )


