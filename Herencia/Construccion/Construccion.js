class Construccion{
    constructor( numPuertas, numVentanas, numPisos, direccion, altura, largoTerreno, anchoTerreno ){
        this._numPuertas = numPuertas
        this._numVentanas = numVentanas
        this._numPisos = numPisos
        this._direccion = direccion
        this._altura = altura
        this._largoTerreno = largoTerreno
        this._anchoTerreno = anchoTerreno

    }

    getAncho(){
        return this._anchoTerreno
    }

    getAltura(){
        return this._altura
    }

    getDireccion(){
        return this._direccion
    }
    getNumeroPisos(){
        return this._numPisos
    }

    setAncho( nuevoAncho ){
        this._anchoTerreno = nuevoAncho
    }

    setAltura( nuevaAltura ){
        this._altura = nuevaAltura
    }

    setDireccion( nuevaDireccion ){
        this._direccion = nuevaDireccion
    }

}//Fin de la clase Construccion

module.exports = Construccion;