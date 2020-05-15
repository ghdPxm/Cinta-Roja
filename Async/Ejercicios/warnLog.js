/*2.- Crear una función de orden superior que reciba como
argumento un mensaje y callback. Según el callback que
se pase como argumento, la función de orden superior
debe mostrar el mensaje en un console.warn o en un 
console.log*/

function ordenSuperior(mensaje, callback) {
    callback(mensaje)
}

function warn(mensaje) {
    console.warn(mensaje)
}

function log(mensaje) {
    console.log(mensaje)
}

ordenSuperior("Hola desde Warn", warn)
ordenSuperior("Hola desde log", log)

