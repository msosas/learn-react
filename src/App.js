import React, { Component } from 'react';
import logo, { ReactComponent } from './logo.svg';
import './App.css';
import Product from './Product'
import products from './dbProducts'


class App extends Component {
  render () {
    const allProducts = products.map(prod => {
      return (
        <Product
          key={ prod.id }
          name={ prod.name }
          price = { prod.price }
          description = { prod.description }
        />
      )
    })
    return (
      <div className="App">
        { allProducts }
      </div>
    )
  }
}

// Ejercicio 03
export default App;
