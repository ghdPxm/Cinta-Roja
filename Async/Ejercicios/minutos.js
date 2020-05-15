/*5.- Hacer un arreglo de 4 cantidades de tiempo en minutos
EJEMPLO[120, 80, 200, 100] y tomar solo las cantidades
mayores a dos horas (hacer la comparación en horas)
mediante un callback*/

function minutos( arreglo, callback ) {
    return callback( arreglo )
}

function evaluacion( arreglo ){
    let nuevoArreglo = []

    for( let i = 0; i < arreglo.length; i++){
        if( arreglo[i]>120 ){
            nuevoArreglo.push( arreglo[i] )
        }
    }

    return nuevoArreglo

}


console.log( minutos( [120,200,34,990], evaluacion ) )