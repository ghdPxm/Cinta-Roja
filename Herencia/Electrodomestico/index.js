/* 2.- Crea una superclase llamada Electrodoméstico con las
    siguientes características:
    a. Sus atributos son precio, color, consumoEnergetico
       y capacidad (peso máximo)
    b. El constructor solo debe pedir precio, color
       y capacidad.
    c. consumoEnergetico debe iniciar con valor de 100 

3.- Crea una subclase de Electrodomestico llamada Lavadora
    con las siguientes características:
    a. Su atributo es carga(kg de ropa), además de los
       atributos heredados.
    b. Crea el método precioFinal(). Este se calcula
       multiplicando el consumoEnergetico por la carga.    
*/

const Lavadora = require( './Lavadora' );

let LavadoraMabe = new Lavadora( 6000, 'Gris', '15Kg', 12 )

console.log( LavadoraMabe.precioFinal() )

