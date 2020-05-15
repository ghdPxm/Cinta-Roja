/*3.- Crear una función de orden superior que reciba como
argumentos dos números y un callback. Según el callback
que se pase a la función, se devuelve la suma de los
dos números, la resta de los dos números o la
multiplicación de los dos números.*/

function ordenSuperior( numeroUno, numeroDos, callback ) {
    callback( numeroUno, numeroDos )
}

function suma( numeroUno, numeroDos ) {
    console.log( "La suma de ", numeroUno, "mas", numeroDos, "es ", ( numeroUno + numeroDos ) )
}

function resta( numeroUno, numeroDos ) {
    console.log( "La resta de ", numeroUno, "menos", numeroDos, "es ", ( numeroUno - numeroDos ) )
    
}

function multiplicacion( numeroUno, numeroDos ) {
    console.log( "La multiplicacion de ", numeroUno, "por", numeroDos, "es ", ( numeroUno * numeroDos ) )

}

ordenSuperior( 10, 10, suma )
ordenSuperior( 22, 8, resta )
ordenSuperior( 8, 5, multiplicacion )

