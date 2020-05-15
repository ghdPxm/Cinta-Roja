const request = require('request');

function atrapar( error, response, body ){ //este es un callback

    console.log( response.statusCode ) //deberia ser 200
   // console.log( body ) //JSON
    const data = JSON.parse( body ) //convierte un json en objeto de JS

    /*for( let i = 0; i < data.results.length; i++){
        console.log( data.results[i].name )
    }*/

    //Una manera mas corta de hacer el recorrido sobre la data es...
    data.results.map( ( person ) => {
        console.log( person.name )
    } )

    //Exclusivamente para los arreglos
    //una manera mas es...
    for ( const person of data.results ){
        console.log( person.name )
    }


}

//tambien puede ser con arrow function
/* const atrapar = (error, response, body) => {
    console.log( response.statusCode ) //deberia ser 200
    console.log( body ) //JSON
} */

request('https://swapi.dev/api/people/', atrapar )