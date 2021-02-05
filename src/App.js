import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

class App extends Component {

  constructor() {
    super()

    this.state = {
      monsters: [
        {
          name: 'Frankestein'
        },
        {
          name: 'Dracula'
        },
        {
          name: 'Zombie'
        }
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            { this.state.string }
          </p>
          <button onClick={() => {this.setState({ string: 'Hello Adriana !!!' })}}>
            Change text
          </button>
        </header>
      </div>
    );
  }
}

export default App;
