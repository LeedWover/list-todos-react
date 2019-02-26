import React, { Component } from 'react';
import './App.css';
import Todos from './containers/Todos/Todos';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Todos />
      </div>
    );
  }
}

export default App;
