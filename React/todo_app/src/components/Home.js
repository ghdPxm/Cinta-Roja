import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CardTodo from './CardTodo';
import NavBar from './NavBar';
import ModalEdit from './ModalEdit';
/*
    useState por que se necesita guardar 
    useEffect por que se necesita cargar los valores sin ningun evento 
en especifico
    */

function Home(){

    /**const [todos, setTodos] =  useState([])*/

    const [todosAlta, setTodosAlta] =  useState([])
    const [todosMedia, setTodosMedia] =  useState([])
    const [todosBaja, setTodosBaja] =  useState([])


    useEffect(() => {
        /* Se traen todos los todos con axios */
        axios.get('https://todoapp-57d98.firebaseio.com/todos.json')
            .then((response) => {
                /*Se crea un arreglo de arreglos */
                //const elements = Object.entries(response.data) Esto conbierte objetos en arreglos
                const elements = Object.entries(response.data).reverse() //Esto conbierte objetos en arreglos
                const realData = elements.map((todo) => { //Converti un arreglo de arreglos a un arreglo de obejetos
                    const [id, data] = todo; //destructurando el arreglo de adentro
                    return {
                        id,
                        ...data //Splitobject hago una copia de la data
                    }
                })
                /**Filtrar los todos por prioridad */
                const alta = realData.filter((todo) => todo.prioridad === "3")
                const media = realData.filter((todo) => todo.prioridad === "2")
                const baja = realData.filter((todo) => todo.prioridad === "1")

                setTodosAlta(alta)
                setTodosMedia(media)
                setTodosBaja(baja)

                /**No filtra los todos por prioridad */
                //setTodos(realData)

            }).catch((error) => {
                alert(error)
        })
    },[])


    return(
        
        <div className="App">
            <NavBar />              
            <div className="container mt-5 pt-5">  
                {/*Boton para crear un nuevo todo's*/}
                <div className="row ">
                    <div className="col-2 mb-5 justify-content-end">
                        <a href="/createTodo" className="btn btn-lg bg-dark text-white">
                            Crear to-do
                        </a>   
                    </div>
                </div>
                <div className="row justify-content-center">
                    {/*Lista de Todo's
                    <div className="col-12 col-sm-8 col-md-8 col-lg-8">
                        {/*Componente para cards que seran los Todo's}
                        {todos.map( 
                            (todo) => 
                                (<CardTodo 
                                    nombre={todo.user} 
                                    todo={todo.todo} 
                                    prioridad={todo.prioridad}
                                />)
                            )
                        }
                    </div>
                    */}  
                    <div className="col-12 col-sm-4 col-md-4 col-lg-4">
                        <h4>Importantes</h4>
                        {todosAlta.map((todo) => {
                            return( 
                                (<CardTodo 
                                    nombre={todo.user} 
                                    todo={todo.todo} 
                                    prioridad={todo.prioridad}
                                />)
                            )
                        })
                        }
                    </div>
                    <div className="col-12 col-sm-4 col-md-4 col-lg-4">
                        <h4>No pasa nada</h4>                        
                        {todosMedia.map((todo) => {
                            return( 
                                (<CardTodo 
                                    nombre={todo.user} 
                                    todo={todo.todo} 
                                    prioridad={todo.prioridad}
                                />)
                            )
                        })
                        }
                   </div>         
                   <div className="col-12 col-sm-4 col-md-4 col-lg-4">
                        <h4>Pueden esperar</h4>
                        {todosBaja.map((todo) => {
                            return( 
                                (<CardTodo 
                                    nombre={todo.user} 
                                    todo={todo.todo} 
                                    prioridad={todo.prioridad}
                                />)
                            )
                        })
                        }
                   </div>
                </div>
            </div>
            <ModalEdit />
        </div> 
    )
}

export default Home;