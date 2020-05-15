const axios = require('axios');

function getCharacter( id ){

    const url = `https://swapi.dev/api/people/${id}`

    //axios example
    const character = axios.get( url )

    //Los metodos .then .catch puede no siempre ir en el mismo orden
    character.then( ( response ) => {
            console.log("Todo bien")
            console.log(response.data)
            console.log(response.status)            
        } )
    .catch( ( error ) => {
        console.log("Algo salio mal")
        console.log(error.response.data)
        console.log(error.response.status)
    } )

    //Otra manera de ejecutar sin asignar la promesa a una constante
    axios.get( url ).then( ( response ) => {
        console.log("Todo bien")
        console.log(response.data)
        console.log(response.status)            
    } )
    .catch( ( error ) => {
        console.log("Algo salio mal")
        console.log(error.response.data)
        console.log(error.response.status)
    } )
    
}

// getCharacter( 22 )

//=====Otro ejemplo =====
function getProfile( id ){

    const url = `https://swapi.dev/api/people/${id}`

    const character = axios.get( url )

    //Promesas anidadas - promises chaining 
    character.then((response) => {
        return response.data
    }).then((personaje) => {
        return axios.get( personaje.homeworld ).then((response) => {
            return {...personaje, homeworld:response.data} //split objet es6 crea una copia de un objeto
        })
    }).then((personaje) => {
        console.log( "El personaje que escogiste es:", personaje.name )
        console.log( "Nacio en el año:", personaje.birth_year )
        console.log( "Es del genero:", personaje.gender )
        console.log( "Su planeta es:", personaje.homeworld.name )
        return personaje
    }).then((elmismopersonaje) => {
        console.log(elmismopersonaje)
    }).catch((error) => {
        console.log(error.response.data)
    })


    /*character.then((response) => {

        const personaje = response.data
        console.log( "El personaje que escogiste es:", personaje.name )
        console.log( "Nacio en el año:", personaje.birth_year )
        console.log( "Es del genero:", personaje.gender )
        console.log( "Es del genero:", personaje.startships )


        //Perdir su planeta
        axios.get(personaje.homeworld).then((response) => {

            const planeta = response.data
            console.log( "Es del planeta:", planeta.name )
            
        })
        .catch((error) => {
            console.log(error.response.data)
        })


        //Pedir su nave
        axios.get(personaje.starships).then((response) => {
            const nave = response.data
            console.log("Su nave es:", nave.name)
        })
        .catch((error) => {
            console.log(error.response.data)
        })
        
    })
    .catch( ( error ) => {
        console.log( error.response.data )
    })*/
}

getProfile( 2 )