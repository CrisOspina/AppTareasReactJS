import React, { Component } from 'react';

class Form extends Component {
    constructor() {
        super();
        this.state = {
            titulo: '',
            responsable: '',
            descripcion: '',
            prioridad: 'alta'
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //Eventos
    handleInput(e){
        const { value, name } = e.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.onAddTodo(this.state);
        this.setState = ({
            titulo: '',
            responsable: '',
            descripcion: '',
            prioridad: 'alta'
        });
    }


    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="card">
                        <form onSubmit={this.handleSubmit} className="card-body">
                        <div className="form-group">
                            <input
                            type="text"
                            name="titulo"
                            className="form-control"
                            value={this.state.titulo}
                            onChange={this.handleInput}
                            placeholder="Titulo"
                            />
                        </div>
                        <div className="form-group">
                            <input
                            type="text"
                            name="responsable"
                            className="form-control"
                            value={this.state.responsable}
                            onChange={this.handleInput}
                            placeholder="Responsable"
                            />
                        </div>
                        <div className="form-group">
                            <input
                            type="text"
                            name="descripcion"
                            className="form-control"
                            value={this.state.descripcion}
                            onChange={this.handleInput}
                            placeholder="Descripcion"
                            />
                        </div>
                        <div className="form-group">
                            <select
                                name="prioridad"
                                className="form-control"
                                value={this.state.prioridad}
                                onChange={this.handleInput}
                            >
                            <option>Alta</option>
                            <option>media</option>
                            <option>Baja</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Guardar
                        </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Form;