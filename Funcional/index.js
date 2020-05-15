const request = require('request');

/*function getPlanet(error, response, body){
    //const data = JSON.parse( body )
   // console.log( "Su planeta es: ", data.name )

}*/
function getPeoples( error, response, body ){
    console.log( response.statusCode )
    const data = JSON.parse( body )

    const personaje = data.results.map( ( personaje ) => { //call back hell -- nunca hacerlo asi 
        request( personaje.homeworld, function( error, response, body ){
            const planeta = JSON.parse( body )

            console.log( "El personaje es: ", personaje.name )
            console.log( "Su planeta es: ", planeta.name )
            
        } )
    } )



   /* for( const person of data.results ){
        console.log( "El personaje es: ", person.name  )
        request( person.homeworld, getPlanet )
    }*/
}

//map filter y find

function getPeople( error, response, body ) {

    const data = JSON.parse( body )

    //Map
    const personajeMap = data.results.map( ( personaje ) =>{
        //return { nombre: personaje.name, peso: `${personaje.mass} Kg` }
        return `El personaje ${personaje.name} tiene un peso de ${personaje.mass} Kg `
    } )

    //console.log( personajeMap )


    //Filter
    const personajeFilter = data.results.filter( ( personaje ) => {
        return personaje.gender === "male" //asercion logica
    } )

    //console.log( personajeFilter )

    //Find
    const personajeFind = data.results.find( ( personaje ) => {
        return personaje.gender === "male" //asercion logica se puede combinar con operadores logicos
    } )

    //console.log(personajeFind)

    //Combinacion de metodos de busqueta
    //Calcular la masa corporal de los personajes de Start Wars
    const personajesIMC = data.results.map( ( personaje ) => {
        return {nombre: personaje.name, imc:(personaje.mass) / (personaje.height / 100 ) **2 }
    } ).filter( ( personaje ) => { return personaje.imc < 30 } ) //return implicito

    console.log(personajesIMC)
}



request( 'http://swapi.dev/api/people/', getPeople )