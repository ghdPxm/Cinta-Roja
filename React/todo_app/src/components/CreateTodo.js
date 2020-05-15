import React, { useState} from 'react';
import axios from 'axios';
import NavBar from './NavBar';

function CreateTodo(props) {

  //Depende de los elementos que se necesiten en la vista
  const [user, setUser] = useState('');
  const [todo, setTodo] = useState('');
  const [prioridad, setPrioridad] = useState('3');

  const limpiarFormulario = () => {
    setPrioridad('3')
    setTodo('')
    setUser('')
  }


  const saveTodo = (event) => {
    event.preventDefault();

    //Envio de los datos con axios, url donde guardar y la data (parametros)
    axios.post('https://todoapp-57d98.firebaseio.com/todos.json',
              {user, todo, prioridad}).then(() => {
                alert("Se a creado el Todo con exito")
                limpiarFormulario()
                props.history.push('/')
              }).catch(() => {
                alert("Hubo un problema al crear el Todo")
              })
              //{user:user, todo:todo, prioridad:prioridad})//ES6 puedes poner un solo nombre si ambos elementos se llaman igual (Naming principle ES6)
  }

  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8 col-md-8 col-sm-8">
              <form onSubmit={saveTodo}>
                <div className="form-group mt-3">
                  <label htmlFor="">Usuario:</label>
                  <input 
                    onChange={(event) => setUser(event.target.value)}
                    className="form-control" 
                    type="text" 
                    name="user" 
                    value={user}
                    placeholder="Mi Nombre" 
                    required
                  />
                  <label htmlFor="">To-Do:</label>
                  <textarea 
                    onChange={(event) => setTodo(event.target.value)}
                    name="todo"
                    value={todo} 
                    className="form-control" 
                    cols="30" 
                    rows="10"
                    required></textarea>
                  <label htmlFor="">Prioridad:</label>
                  <select
                    name="prioridad"
                    required
                    value={prioridad}
                    onChange={(event) => setPrioridad(event.target.value)}
                    className="form-control" >
                    <option value="3">Alta</option>
                    <option value="2">Media</option>
                    <option value="1">Baja</option>
                  </select>
                  <button type="submit" className="btn btn-info mt-3" >Guardar</button>
                </div>
              </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTodo;
