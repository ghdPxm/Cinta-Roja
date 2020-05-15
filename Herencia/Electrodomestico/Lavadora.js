const Electrodomestico = require( './Electrodomestico' );

class Lavadora extends Electrodomestico{
    constructor( precio, color, capacidad, carga ){
        super(precio, color, capacidad)

        this.carga = carga

    }

    precioFinal(){
        return `El precio final de la lavadora es: $ ${this.consumoEnergetico * this.carga}`
    }

}//Fin de la clase Lavadora

module.exports = Lavadora;
