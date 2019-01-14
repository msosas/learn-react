import React, { Component } from 'react';
import logo, { ReactComponent } from './logo.svg';
import './App.css';
import Product from './Product'
import products from './dbProducts'


class App extends Component {
  render () {
    return (
      <div className="App">
        <Product />
      </div>
    )
  }
}

// Ejercicio 03
export default App;
