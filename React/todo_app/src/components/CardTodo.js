import React from "react";

function CardTodo(props){
    {/*Arreglo de objetos literales que continen las clases de 
    bootstrap para las cards de los todos */}
    const background = {
        "1":"card text-white bg-success",
        "2":"card text-white bg-warning",
        "3":"card text-white bg-danger"
    }

    return(
        <div className={background[props.prioridad] + " mt-2"}>
            <div className="card-header">
                Creado por: <b> {props.nombre} </b>
            </div>
            <a className="card-select" href="#">
            <div className="card-body ">
            
                <p className="card-text">
                     {props.todo} 
                </p>
                
            </div></a> 
            <div className="card-fotter text-center">
                <button className="btn btn-info">Editar</button>
            </div>

        </div>
    )
}

export default CardTodo;