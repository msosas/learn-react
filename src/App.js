import React, { Component } from 'react';
import logo, { ReactComponent } from './logo.svg';
import './App.css';
import Spinner from './Spinner'
import Login from './Login'
import UserAccount from './UserAccount'

class App extends Component {
  constructor () {
    super()
    this.state = {
      isLoading: false,
      isLoged: false
    }
    this.updateLogStatus = this.updateLogStatus.bind(this)
    this.showSpinner = this.showSpinner.bind(this)
    this.hideSpinner = this.hideSpinner.bind(this)
  }

  updateLogStatus () {
    setTimeout ( () => {
      this.setState({
        isLoged: !this.state.isLoged
      })
    },2000)
  }

  showSpinner() {
    this.setState({
      isLoading: true
    })
  }

  hideSpinner() {
    this.setState({
      isLoading: false
    })
  }
 
  render () {
    return (
      <div className="App">
        { 
          this.state.isLoged ? 
          <UserAccount hideSpinner={this.hideSpinner}/> :
          <Login updateLogStatus={this.updateLogStatus} showSpinner={this.showSpinner}/>
        }
        { this.state.isLoading && <Spinner /> }
      </div>
    )
  }
}

export default App;
