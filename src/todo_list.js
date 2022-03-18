import React, { Component } from 'react';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            text: '',
            complete: false,
            items: []
        };
    }

    onChangeTitle(event) {
        this.setState({
            title: event.target.value
        });
    }

    onChangeText(event) {
        this.setState({
            text: event.target.value
        });
    }
    
    addTodo(event) {
        event.preventDefault();
        this.setState({
            title: '',
            text:'',
            complete: '',
            items: [...this.state.items, this.state.title + '\n' + this.state.text]
        });
        console.log(this.state)
    }

    showTodos() {
        return this.state.items.map((item) => {
            return (
                <div className="list-group-item" key={item}>
                    {item}<div className="col-12"><button className="col btn btn-outline-success mt-4 me-4" onClick={this.completeTodo}>Fait</button><button className=" col btn btn-danger mt-4" onClick={this.deleteTodo.bind(this, item)}>Supprimer</button></div>
                </div>    
            );
        });
    }

    deleteTodo(item) {

        const array = this.state.items;
        const index = array.indexOf(item);
        array.splice(index, 1);
        this.setState({
            items: array
        });
    }

    completeTodo () {
        this.setState({complete: true}) 
    }
    
    render() {
        return(
            <div className="conrainer col-7 mx-auto">
                <h1 className="text-center mb-4">Liste de choses à faire</h1>
                <form className="align-items-center text-center">
                    <input value={this.state.title} type="text" className="form-control mb-4" placeholder="Titre" onChange={this.onChangeTitle.bind(this)}/>
                    <textarea value={this.state.text} rows="6" className="form-control mb-4" placeholder="Description de la tâche" onChange={this.onChangeText.bind(this)}/>
                    <button className="btn btn-primary mb-4" onClick={this.addTodo.bind(this)}>
                        Ajouter
                    </button>
                </form>
                <div className="list-group">
                    {this.showTodos()}
                </div>
            </div>
        );
    }
}

export default TodoList;