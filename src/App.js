import './App.css';
import React, { Component } from 'react';
import CardList from './components/card-list/card-list.component';

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
      .then(response => response.json())
        .then(users => this.setState({ monsers: users }))
  }

  render() {
    return (
      <div className="App">
        <CardList>
          {
            this.state.monsters.map((monster) => {
              return <h1 key={monster.id}> {monster.name} </h1>
            })
          }
        </CardList>
      </div>
    );
  }
}

export default App;
