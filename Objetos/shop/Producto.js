class Producto{
    constructor(nombre, precio){
        this._nombre = nombre
        this._precio = precio
    }

    //getters and setters

    getNombre(){
        return this._nombre
    }
    getPrecio(){
        return this._precio
    }

    setNombre(nuevoNombre){
        this._nombre = nuevoNombre
    }
}

module.exports = Producto; //Compartir la clase con otros archivos