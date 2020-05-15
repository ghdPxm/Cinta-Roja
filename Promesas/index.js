function login( email, password ){

    return new Promise( ( resolve, reject ) => {
        
        //Se va a simular que se ira por datos al servidor
        setTimeout( () =>{

            const mail = "ghd.inf@gmail.com"
            const pass = "1234"

            if( email === mail && password === pass ){
                resolve( {mensaje: "Te haz logueado con exito", logueado: true  } )
            }else{
                const error = new Error( 'Tu password o email son incorrectos' )
                reject(error)
            }

        }, 1000 )
    } )
}

//Solo imprime el estado de la promesa
console.log( login( "ghd.inf@gmail.com", "1234" ) )

login( "ghd.inf@gmail.com", "1234" )
    .then( ( mensaje ) => console.log( mensaje.mensaje ) )//La promesa se ejecuto de manera correcta
    .catch( ( error ) => console.log( error ) ) //la promesa no se ejecuto de manera correcta

login( "ghd.inf@gmail.com", "12345" )
    .then( ( mensaje ) => console.log( mensaje ) )//La promesa se ejecuto de manera correcta
    .catch( ( error ) => console.log( error.message ) ) //la promesa no se ejecuto de manera correcta