import React, { Component } from 'react';
import logo, { ReactComponent } from './logo.svg';
import './App.css';
import Joke from './Joke'
import JokesData from './JokesData'

class App extends Component {
  render () {
    const Jokes = JokesData.map((joke) => {
      return (
        <Joke key= { joke.id } question={ joke.question } punchLine={ joke.punchLine }/>
      )
    })
    return (
      <div className="App">
        { Jokes }
      </div>
    )
  }
}

// Ejercicio 03
export default App;
