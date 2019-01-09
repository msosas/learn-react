import React, { Component } from 'react';
import logo, { ReactComponent } from './logo.svg';
import './App.css';
import Footer from './Footer'

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

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
