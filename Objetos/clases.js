class Perro{
    constructor(nombre, color, num_patas, peso, altura){
        this.nombre = nombre
        this.color = color
        this.num_patas = num_patas
        this.peso = peso
        this.altura = altura
    }

    getSaludo(){
        return "Hola soy " + this.nombre
    }
}

let snoopy = new Perro("Scooby", "Blanco con negro", 2, "9kg", "1m")
let scooby = new Perro("Scooby", "Blanco con negro", 2, "9kg", "1m")
let huesos = new Perro("Scooby", "Blanco con negro", 2, "9kg", "1m")

