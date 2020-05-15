const Cuenta = require('./Cuenta')

let cuentaAhorro = new Cuenta( "Gerardo Hernandez", 300 )

//Ingreso
console.log( "Saldo actual: ", cuentaAhorro.ingresar( 600 ) )

//Rertiro
console.log( "Saldo actual: ", cuentaAhorro.retirar(800) )





