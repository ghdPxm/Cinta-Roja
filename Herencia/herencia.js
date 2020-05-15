class Mascota {

    constructor( nombre, color ){
        this.nombre = nombre
        this.color = color
    }

    comer( alimento ) {
        return `${this.nombre} esta comiendo ${alimento}`
    }

    saludar(){
        return `Hola soy ${this.nombre} te saludo humano`
    }

}

class Perro extends Mascota{

    constructor( nombre, color, patas, raza, peso ){
        
        super(nombre, color)//Se manda a llamar siempre al constructor del padre
      
        this.patas = patas
        this.raza = raza
        this.peso = peso 

    }

    saludar(){
        return 'Guau Guau'
    }
}


class Pez extends Mascota {

    constructor(nombre, color, tipoPecera, tipoAgua, cantidadAlimento){
        super(nombre, color)

        this.tipoPecera =  tipoPecera
        this.tipoAgua = tipoAgua
        this.cantidadAlimento = cantidadAlimento
    }

    nadar(){
        return `${this.nombre} esta nadando feliz en su pecera ${this.tipoPecera}`
    }

    //Override o Sobreescribir
    saludar(){
        return 'glug glug'
    }

}

let nemo = new Pez( 'Nemo', 'Anaranjado', 'Cristal Templado', 'Salada', '2g' )
console.log( nemo.nombre )
console.log( nemo.comer( 'Alimento especial' ) )
console.log( nemo.nadar() )
console.log( nemo.saludar() )

let huesos = new Perro( 'Huesos', 'cafe', 4, 'galgo' )
console.log( huesos.nombre )
console.log( huesos.raza )
console.log( huesos.comer( 'carnitas' ) )
console.log( huesos.saludar() )



