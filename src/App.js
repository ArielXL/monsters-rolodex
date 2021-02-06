import './App.css';
import React, { Component } from 'react';

class App extends Component {

  constructor() {
    super()

    this.state = {
      monsters: []
    }
  }

  componentDidMount() {
    const url = 'https://jsonplaceholder.typicode.com/users';

    fetch(url)
      .then(reponse => response.json())
        .then(users => this.setState({ monsers: users }))
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
