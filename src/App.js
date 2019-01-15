import React from "react"
import './style.css'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      counter: 0
    }
  }
  render () {
    return (
      <div>
        <h2>{ this.state.counter }</h2>
        <button onClick= { () => this.setState({counter: this.state.counter +1})}>Change</button>
      </div>
    )
  }
}  

export default App
