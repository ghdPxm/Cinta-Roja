const Maestro = require( './Maestro' );

class MaestroMusica extends Maestro {

    constructor(materia, edad){
        super(materia)

        this.edad = edad
    }

}//Fin de la clase MaestroMusica

module.exports = MaestroMusica;

