const Maestro = require( './Maestro' );

class MaestroFisica extends Maestro {

    constructor(materia, antiguedad){
        super(materia)

        this.antiguedad = antiguedad
    }

}//Fin de la clase MaestroMusica

module.exports = MaestroFisica;