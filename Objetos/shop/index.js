const Cliente = require('./Cliente');
const Producto = require('./Producto');


let ipad = new Producto('Ipad 16GB', 7000)
let iphone = new Producto('Iphone X Max', 60000)

let cliente1 = new Cliente(1, 'Edwin', 27, 'M', 'correo', 'telefono')

cliente1.agregarCarrito(ipad)
cliente1.agregarCarrito(iphone)
console.log(cliente1.comprar())


let computadora = new Producto('Computadora gamer', 70000)
let celular = new Producto('Samsung Galaxi s20', 30000)
let play = new Producto('Play Station 4', 10000)

console.log(computadora.getNombre())
computadora.setNombre("Otra computadora mas chida")
console.log(computadora.getNombre())


const cliente2 = new Cliente(2, 'Luis', 35, 'm', 'correo', '00000')

cliente2.agregarCarrito(computadora)
computadora._precio = 2
cliente2.comprar()
