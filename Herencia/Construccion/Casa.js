const Construccion = require('./Construccion');

class Casa extends Construccion{
    constructor( numPuertas, numVentanas, numPisos, direccion, altura, largoTerreno, anchoTerreno ){
        super( numPuertas, numVentanas, numPisos, direccion, altura, largoTerreno, anchoTerreno )
    }
}

module.exports = Casa;