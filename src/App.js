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
        .then(users => this.setState({ monsters: users }))
  }

  render() {
    console.log(this.state.monsters);
    return (
      <div className="App">
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
}

export default App;
