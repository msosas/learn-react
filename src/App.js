import React, { Component } from 'react';
import logo, { ReactComponent } from './logo.svg';
import './App.css';
import Spinner from './Spinner'


class App extends Component {
  constructor () {
    super()
    this.state = {
      isLoading: true
    }
  }
  componentDidMount () {
    setInterval(() => {
      this.setState({
        isLoading: false
      })
    }, 2000)
  }
  render () {
    return (
      <div className="App">
        { this.state.isLoading ? <Spinner /> : <h1>Loaded</h1>}
      </div>
    )
  }
}

export default App;
