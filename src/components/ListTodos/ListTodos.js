import React from 'react';
import './ListTodos.css';

const TodoList = props => {
  return (
    <ul>
      <li>{props.title}</li>
      <input type="checkbox" checked={props.completed} />
    </ul>
 )
}

export default TodoList;