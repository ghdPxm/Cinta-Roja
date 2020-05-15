class Maestro{
        constructor( materia ){
            this.materia = materia
        }

        calcularPromedio( calificaciones ){
            let promedio = 0.0

            for( let i = 0; i < calificaciones.length; i++ ){
                promedio = promedio + calificaciones[i]
            }

            return `El promedio para la materia: ${this.materia}, es: ${promedio / calificaciones.length}`


        }
   }//Fin de la calse Maestro

   module.exports = Maestro;