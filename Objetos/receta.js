/* Crea un objeto que contenga información de una receta para preparar Mole. Debe contener las propiedades de título (string), porciones (numero) e ingredientes (un     arreglo de strings). Muestra la información de la receta para que luzca así:
    Mole
    Porciones: 2
    Ingredientes:
    canela
    comino
    cocoa */

let Mole =  {
    titulo: "Mole Negro",
    porciones: 2,
    ingredientes: ["Canela", "Comino", "Cocoa"]
};

console.log(Mole.titulo)
console.log("Porciones: " + Mole.porciones)
for(let i = 0; i < Mole.ingredientes.length; i++){
    console.log(Mole.ingredientes[i])
}

