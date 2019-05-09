/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//Importo archivo json = simulo datos del backend
import { todos } from './todos.json';

import Form from './Form/Form';

class App extends Component {

  //Defino objeto que tiene los datos del archivo json
  constructor() {
    super();
    this.state = {
      todos
    };
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  handleAddTodo(todo){
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }

  removeTodo(index){
    if(window.confirm('¿Seguro que la deseas borrar?'))
    {
      this.setState({
        todos: this.state.todos.filter((e, i) => {
          return i !== index
        })
      });
    }
  }

  render(){
    //Recorrer archivo json con .map
    const todos = this.state.todos.map((todo, i) => {
      return(
        <div className="container">
          <div className="row" key={i}>
                <div className="card mt-4 col-12">
                  <div className="card-header">
                    <h3>{todo.titulo}</h3>
                    <span className="badge badge-pill badge-danger ml-2">
                      {todo.prioridad}
                    </span>
                  </div>
                  <div className="card-body">
                    <p>{todo.responsable}</p>
                    <p>{todo.descripcion}</p>
                  </div>
                  <div className="card-footer">
                    <button className="btn btn-danger"
                            onClick={this.removeTodo.bind(this, i)}
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
          </div>
        </div>
      )
    });

    return (
      <div className="App">
        {/*Navegación*/}
        <nav className="navbar navbar-dark bg-dark">
          <a className="text-white">
            <span className="ml-4 mr-2 display-4">Tareas -- </span>
            <span className="display-4">
                { this.state.todos.length }
            </span>
          </a>
        </nav>
        <div className="container">
          <div className="row mt-4">
            <div className="col-12">
              <Form onAddTodo={this.handleAddTodo}/>
            </div>
          </div>
        </div>
            
        <div className="container">
          <div className="row">
              {todos}
          </div>
        </div>
        
        <footer className="App-footer">
          <img src={logo} className="App-logo" alt="logo" />
        </footer>

      </div>
      
    );
  }
}

export default App;
