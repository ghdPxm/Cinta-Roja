let huesos = {
    num_ojos: 2,
    color: 'cafe',
    num_patas: 4,
    altura: '1m',
    peso: '5kg',
    ladra:() => {
        return 'Guau Guau'
    },
    olfatea: (objeto) => {
        return 'Huesos esta ofateando '+objeto
    },
    comer: (comida) => {
        if(comida == 'carne'){
            return 'Huesos esta contento'
        }else{
            return 'Huesos ya no te quiere :('
        }
    }
};

console.log(huesos.ladra())
console.log(huesos.num_ojos)
console.log(huesos.olfatea('otro perro'))
console.log(huesos.comer('pescado'))


let snoopy = {
    num_ojos: 2,
    color: 'blanco',
    num_patas: 2,
    altura: '1m',
    peso: '15kg'
};

console.log("Huesos pesa: ", huesos.peso)
console.log("Esnoopy pesa: ", snoopy.peso)

snoopy.amigo = "Charly Brown"
snoopy.baila = () => {
    return "Snoopy esta bailando"
}

snoopy.color = 'Blanco con manchas negras'

console.log("El color de snoopy es: ", snoopy.color)
console.log(snoopy.baila())

console.log("El amigo de huesos es: ", huesos.amigo)
console.log("El amigo de snoopy es: ", snoopy.amigo)

let scooby = {
    nombre: "Scooby Dood",
    saluda: function () {
        return "Hola soy " + this.nombre
    }
}

console.log(scooby.saluda())

//Scope => prototype
//function () {} se puede usar el this.

//Scope => arrow class
// () => {} no se puede usar el this.
