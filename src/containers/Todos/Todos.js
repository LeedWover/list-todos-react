import React, { Component } from 'react';
import './Todos.css';
import AddNewTodo from '../../components/AddNewTodo/AddNewTodo';
import ListTodos from '../../components/ListTodos/ListTodos';

class Todos extends Component {
  state = {
    newTodo: '',
    todos: [
      {
        title: 'Wash the clothes',
        completed: true
      },
      {
        title: 'Go to shopping',
        completed: false
      }
    ]
  }

  handleChange = event => {
    this.setState({ newTodo: event.target.value});
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      todos: [...this.state.todos, {
        title: this.state.newTodo,
        completed: false
      }],
      newTodo: ''
    });
  } 

  render() {
    const list = this.state.todos.map((todo, index) => {
      return (
        <ListTodos
          title={todo.title}
          completed={todo.completed}
          key={index}
        />
      )
    });
    return (
      <div className="Todos">
        <AddNewTodo
          submitTodo={this.handleSubmit}
          handleChange={this.handleChange}
          newTodo={this.state.newTodo}
        />
        {list}
      </div>
    )
  }
}

export default Todos;