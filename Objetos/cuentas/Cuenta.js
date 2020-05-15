class Cuenta {

    constructor(titular, cantidad){
        this.titular = titular
        this.cantidad = cantidad
    }

    ingresar( cantidad ){
        if ( this.cantidad == 900  ){
            return "No es posible realizar mas ingresos, tope de ingreso alcanzado"
        }else if( ( this.cantidad + cantidad ) > 900 ){
            return "No es posible realizar este ingreso, tope de ingreso alcanzado"
        }else{
            this.cantidad = this. cantidad + cantidad
        }

        return this.cantidad
    }

    retirar( cantidad ){
        if ( this.cantidad == 10 ){
            return "No es posible realizar mas retiros, tope de retiros alcanzado"
        }else if( ( this.cantidad - cantidad ) < 10 ){
            return "No es posible realizar este retiro, tope de retiros alcanzado"

        }else{
            this.cantidad = this.cantidad - cantidad
        }

        return this.cantidad
    }


}

module.exports = Cuenta;