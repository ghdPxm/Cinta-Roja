class Largometraje{

    constructor( titulo, duracion ){
        this.titulo = titulo
        this.duracion = duracion
    }

}//Fin clase largometraje

class Pelicula extends Largometraje{
    
    constructor( titulo, duracion, genero, clasificacion ){
        super( titulo, duracion )

        this.genero = genero
        this.clasificacion = clasificacion
    }
}//Fin de la clase Pelicula

class Documental extends Largometraje{

    constructor( titulo, duracion, patronizador, pais ){     
        super( titulo, duracion)

        this.patronizador = patronizador
        this.pais = pais
    }
}//Fin  de la clase Documental

class Cine{

    constructor( nombre ){
        this.nombre = nombre
    }
    
    /* 
    Aun que esta bien es redundante por que ambos repoducen

    reproducirPelicula( pelicula ){
        return `Reproduciendo: ${pelicula.titulo}`
    }

    reproducirDocumental( documental ){
        return `Reproduciendo: ${documental.titulo}`
    } */

    //Solucion
    reproducir( largometraje ){
        return `Reproduciendo: ${largometraje.titulo}`
    }

}//Fin de la calse Cine

let titanic = new Pelicula( 'Titanic', '190min', 'Historia', 'T' )
let volcanes =  new Documental( 'Volcanes de America', '100min', 'UNESCO', 'Mexico'  )

let cine = new Cine( 'Cinepolis' )

// console.log( cine.reproducirPelicula( titanic ) )
// console.log( cine.reproducirDocumental( volcanes ) )

console.log( cine.reproducir( titanic ) )
console.log( cine.reproducir( volcanes ) )