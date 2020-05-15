class Constructora{
    constructor( nombre ){
        this.nombre = nombre
    }

    construir( construccion ){
        return `Construllendo ${construccion.getNumeroPisos()} piso(s)...`
    }

    calcularMetrosCuadrados( construccion ){
        return `Los metros cuadrados para esta construccion son: ${construccion.getAncho() * construccion.getAltura()} metros`
    }

    optenerDireccion( construccion ){
        return `La direccion de la construccion es: ${construccion.getDireccion()}`
    }

    cambiarDireccion( construccion, nuevaDireccion ){
        construccion.setDireccion( nuevaDireccion )
        return 'La direccion se actualizo correctamente...'
    }
}

module.exports = Constructora;