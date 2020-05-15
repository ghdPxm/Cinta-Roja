/* Crea un arreglo de objetos, donde cada objeto describa un libro y tenga las propiedades para titulo(string), autor(string) y leido(booleano para indicar si se ha leido o no). Itera sobre el arreglo de libros, y por cada libro imprime el titulo y autor, junto con su status de lectura (si ya ha sido leído, o no). */

let Libros = [
    {
        titulo:  "Arduino aplicaciones en robotica",
        autor: "Reyes Cid",
        leido: true
    },
    {
        titulo: "La Biblia de Visual C#",
        autor: "Francisco Javier",
        leido: false
    },
    {
        titulo: "Estrucra de datos en Java",
        autor: "Mark Allen Weiss",
        leido: true
    }

];

Libros.forEach(element => {
    console.log("===============================")
    console.log("Titulo: ", element.titulo)
    console.log("Autor:", element.autor)
    if(element.leido == true){
        console.log("Estatus: Leido")
    }else{
        console.log("Estatus: No leido")  
    }
});

