import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import SingleTodo from './SingleTodo';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos : [],
      currentTodo : ''
    }
  }

  onInputChange = (e) => {
    
    this.setState({currentTodo : e.target.value });
  }


  onClick = () => {
    let todosCopy = this.state.todos.slice();
    todosCopy.push(this.state.currentTodo);

    this.setState({ todos : todosCopy, currentTodo : '' });
  }


  deleteButton = (i) => {
    let todosCopy = this.state.todos.slice();
    todosCopy.splice(i, 1);

    this.setState({todos : todosCopy, currentTodo : ""});
  }

  render() {
    let bulletTodos = this.state.todos.map((val, i) => {
      return (
        <SingleTodo delete={this.deleteButton} todo={val} />
      );

    });

    return (
       <div> 
          <input placeholder="Enter TODOs" value = {this.state.currentTodo} onChange = {this.onInputChange} />
          <button onClick = { this.onClick } >Add!</button>
          <br/>

          {this.state.todos.length === 0 ? "No todos yet" : <ul>{bulletTodos}</ul> }
       </div>
    );
  }

}

export default App;
