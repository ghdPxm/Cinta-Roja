/*4.- Escribe una funcion de orden superior que reciba una cadena de
caracteres y debe devolver, mediante un callback, la
cadena de caracteres en mayusculas o en minusculas.
    ordenSuperior("PejeLagarto", minus);
    -> pejelagarto
    ordenSuperior("PejeLagarto", mayus);
    -> PEJELAGARTO*/

function ordenSuperior( cadena, callback ) {
    callback( cadena )
}

function minus( cadena ) {
    console.log( cadena.toLowerCase() )
}

function mayus( cadena ){
    console.log( cadena.toUpperCase() )
}

ordenSuperior( "Puerto Escondido", minus )
ordenSuperior( "Zicatela",mayus )