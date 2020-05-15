/* 1. Hacer superclase Maestro y subclases Maestro de Física y
   Maestro de Música y a cada uno asignarle su materia y
   calcular su promedio de grupo a partir de calificaciones
   (puedes usar arreglos). El maestro de física tiene un
   atributo "antiguedad" que guarda un valor numerico,
   mientras que el maestro de música tiene un atributo "edad"
   también guardando un valor numérico. */

const MaestroMusica = require( './MaestroMusica' );
const MaestroFisica = require( './MaestroFisica' );

let Beethoven = new MaestroMusica('Piano de cola', 55)
let caliBeethoven = [9, 8, 7, 5, 4]

let Einstein = new MaestroFisica('Relatividad General', 30)
let caliEinstein = [6, 7, 9, 8, 6]

console.log( Beethoven.calcularPromedio( caliBeethoven ) )
console.log( Einstein.calcularPromedio( caliEinstein ) )

