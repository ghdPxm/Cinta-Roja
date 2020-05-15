
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
        for(let i = 0; i > this.carrito.length; i++){
            console.log("Estas comprando " + this.carrito[i].nombre + " por " + this.carrito[i].precio)
            total =  total + this.carrito[i].precio
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

class Producto{
    constructor(nombre, precio){
        this.nombre = nombre
        this.precio = precio
    }
}

let ipad = new Producto('Ipad 16GB', 7000)
let iphone = new Producto('Iphone X Max', 60000)

let cliente1 = new Cliente("Edwin", 27, 'M', 'correo', 'telegono')

cliente1.agregarCarrito(ipad)
cliente1.agregarCarrito(iphone)
console.log(cliente1.comprar())