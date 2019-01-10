import React, { Component } from 'react';
import logo, { ReactComponent } from './logo.svg';
import './App.css';
import Header from './Header'
import MainContent from './MainContent'
import Footer from './Footer'


class App extends Component {
  render () {
    return (
      <div className="App">
        <Header />
        <MainContent />
        <Footer />
      </div>
    )
  }
}

// Ejercicio 03
export default App;
