class Cliente {

    constructor(id, nombre, edad, genero, email, telefono){
        this.id = id
        this.nombre = nombre
        this.edad =  edad
        this.genero = genero
        this.email = email
        this.telefono = telefono
        this.carrito = []
        this.suscrito = false
    }

    agregarCarrito(producto){
        this.carrito.push(producto)
    }

    checarCarrito(){
        return this.carrito
    }
    
    comprar(){
        let total = 0
        for(let i = 0; i < this.carrito.length; i++){
            console.log("Estas comprando " + this.carrito[i].getNombre() + " por " + this.carrito[i].getPrecio())
            total =  total + this.carrito[i].getPrecio()
        }
        return "Tu total de tu compra es: " + total
    }

    suscribirse(){
        if(this.suscrito){
            return "El cliente ya esta suscrito"
        }else{
            this.suscrito = true
            return "El cliente se suscribio correctamente"
        }
    }

}

module.exports = Cliente; //La clase cliente se puede compartir con otros archivos