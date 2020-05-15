class Persona {

    constructor( primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, fecha_nacimiento, edad, RFC, genero, peso, altura ){
        this._primer_nombre = primer_nombre
        this._segundo_nombre = segundo_nombre
        this._primer_apellido = primer_apellido
        this._segundo_apellido = segundo_apellido
        this._fecha_nacimiento = fecha_nacimiento
        this._edad = edad
        this._RFC = RFC
        this._genero = genero
        this._peso = peso
        this._altura = altura
    }

    //getters
    getPrimerNombre(){
        return this._primer_nombre
    }

    getSegundoNombre(){
        return this._segundo_nombre
    }

    getPrimerApellido(){
        return this._primer_apellido
    }

    getSegundoApellido(){
        return this._segundo_apellido
    }

    getFechaNacimiento(){
        return this._fecha_nacimiento
    }

    getEdad(){
        return this._edad
    }

    getRFC(){
        return this._RFC
    }

    getGenero(){
        return this._genero
    }

    getPeso(){
        return this._peso
    }

    getAltura(){
        return this._altura
    }

    //setters
    setPrimerNombre( nuevoPrimerNombre ){
        this._primer_nombre = nuevoPrimerNombre
    }

    setSegundoNombre( nuevoSegundoNombre ){
        this._segundo_nombre = nuevoSegundoNombre
    }

    setPrimerApellido( nuevoPrimerApellido ){
        this._primer_apellido= nuevoPrimerApellido
    }

    setSegundoApellido( nuevoSegundoApellido ){
        this._segundo_apellido= nuevoSegundoApellido
    }

    setFechaNacimiento( nuevaFechaNacimiento ){
        this._fecha_nacimiento= nuevaFechaNacimiento
    }

    setEdad( nuevaEdad ){
        this._edad = nuevaEdad
    }

    setRFC( nuevoRFC ){
        this._RFC = nuevoRFC
    }

    setGenero( nuevoGenero ){
        this._genero = nuevoGenero
    }

    setPeso( nuevoPeso ){
        this._peso = nuevoPeso
    }

    setAltura( nuevaAltura ){
        this._altura = nuevaAltura
    }


    //Metodos
    calcularIMC(){
        return this._peso / ( (this._altura) ^ 2 )
    }

    esMayorDeEdad(){
        if ( this._edad >= 18 ){
            return this._primer_nombre + ", ya es mayor de edad!!"
        }else{
            return this._primer_nombre + ", aun no es mayor de edad!!"
        }
    }

    generarRFC(){

        let caracteres = "abcdefghijklmnopqrstuvwxyz0123456789"
        let caracteresAleatorios = ''

        for( let i = 0; i < 3; i++ ){
            caracteresAleatorios = caracteresAleatorios + caracteres.charAt( parseInt( Math.random() * caracteres.length ) )
        }

        let RFC = this._primer_apellido.slice(0, 2) + this._segundo_apellido.slice(0, 1) + this._primer_nombre.slice(0, 1) + this._fecha_nacimiento.slice(6) + this._fecha_nacimiento.slice(3, -3) + this._fecha_nacimiento.slice(0, -6) + caracteresAleatorios

        return RFC.toUpperCase()
    }

}

module.exports = Persona;