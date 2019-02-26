import React from 'react';
import './AddNewTodo.css';

const AddNewTodo = props => (
  <form className="NewTodo" onSubmit={props.submitTodo}>
    <input type="text" value={props.newTodo} name="newTodo" onChange={props.handleChange} />
    <button>Send the todo</button>
  </form>
)

export default AddNewTodo;