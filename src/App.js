import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

class App extends Component {

  constructor() {
    super()

    this.state = {
      monsters: [
        {
          id: '0',
          name: 'Frankestein'
        },
        {
          id: '1',
          name: 'Dracula'
        },
        {
          id: '2',
          name: 'Zombie'
        }
      ]
    }
  }

  render() {
    return (
      <div className="App">
        {
          this.state.monsters.map((monster) => {
            return <h1 key={monster.id}> {monster.name} </h1>
          })
        }
      </div>
    );
  }
}

export default App;
