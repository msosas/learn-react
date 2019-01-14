import React, { Component } from 'react';
import logo, { ReactComponent } from './logo.svg';
import './App.css';
import Footer from './Footer'

// Exercise 01
// class App extends React.Component {
//   render() {
//     return (
//       <div className="App">
//         <h1>Exercise 01</h1>
//         <ul>
//           <li>item01</li>
//           <li>item02</li>
//           <li>item03</li>
//         </ul>
//       </div>
//     );
//   }
// }

// Exercise 02
class App extends Component {
  render () {
    return (
      <div className="App">
        <h1>Matías Sosa</h1>
        <p>Computer Engineer | DevOps Engineer</p>
        <div>
          <ol>
            <li>Cancún</li>
            <li>Amsteram</li>
            <li>Tafí del Valle</li>
          </ol>
        </div>
        <Footer />
      </div>
    )
  }
}

// Ejercicio 03
export default App;
