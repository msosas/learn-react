import React, { Component } from 'react';
import logo, { ReactComponent } from './logo.svg';
import './App.css';
import Footer from './Footer'

/**
 * Challenge: Wire up the partially-finished travel form so that it works!
 * Remember to use the concept of controlled forms
 * https://reactjs.org/docs/forms.html
 * 
 * All information should be populating the text below the form in real-time
 * as you're filling it out
 * 
 * This exercise is adapted from the V School curriculum on vanilla JS forms:
 * https://coursework.vschool.io/travel-form/
 * 
 * All of our challenges and learning resources are open for the public
 * to play around with and learn from at https://coursework.vschool.io
 */

class App extends Component {
  constructor() {
      super()
      this.state = {
          firstName: "",
          lastName: "",
          age: "",
          gender: "",
          location: "",
          isKoshe: false,
          isVegan: false,
          isLactose: false
      }
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  handleChange(event) {
      const { name, value, checked, type } = event.target
      type === "checkbox" ? this.setState({ [name]: checked}) : this.setState({ [name]: value })
  }
  
  handleSubmit () {
      console.log("works")
  }
  
  render() {
      return (
          <main>
              <form onSubmit={this.handleSubmit}>
                  <input 
                      name="firstName" 
                      onChange={this.handleChange} 
                      placeholder="First Name" 
                      value={this.state.firstName}
                  /><br />
                  <input 
                      name="lastName" 
                      onChange={this.handleChange} 
                      placeholder="Last Name" 
                      value={this.state.lastName}
                  /><br />
                  <input 
                      name="age" 
                      onChange={this.handleChange} 
                      placeholder="Age" 
                      value={this.state.age}
                  /><br />
                  
                  <label>
                      Female
                      <input 
                          type="radio"
                          name="gender"
                          value="female"
                          checked={this.state.gender === "female"}
                          onChange={this.handleChange}
                      />
                  </label>
                  
                  <label>
                      Male
                      <input 
                          type="radio"
                          name="gender"
                          value="male"
                          checked={this.state.gender === "male"}
                          onChange={this.handleChange}
                      />
                  </label>
                  <br />
                  
                  <label>
                      Location 
                      <select onChange={this.handleChange} name="location" value={this.state.location}>
                          <option value="Argentina">Argentina</option>
                          <option value="España">España</option>
                          <option value="Nueva Zelanda">Nueva Zelanda</option>
                      </select>
                  </label>
                  <br />
                  
                  <input 
                      type="checkbox"
                      checked={this.state.isKoshe}
                      name="isKoshe"
                      onChange={this.handleChange}
                  /> Koshe
                  <input 
                      type="checkbox"
                      name="isVegan"
                      checked={this.state.isVegan}
                      onChange={this.handleChange}
                  /> Vegan
                  <input 
                      type="checkbox"
                      name="isLactose"
                      checked={this.state.isLactose}
                      onChange={this.handleChange}
                  /> Lactose Free
                  <br />
                  
                  <button>Submit</button>
              </form>
              <hr />
              <h2>Entered information:</h2>
              <p>Your name: { this.state.firstName + " " + this.state.lastName}</p>
              <p>Your age: { this.state.age }</p>
              <p>Your gender: { this.state.gender }</p>
              <p>Your destination: { this.state.location }</p>
              <p>
                  Your dietary restrictions: 
                  { this.state.isKoshe ? "Koshe " : null }
                  { this.state.isLactose ? "Lactose " : null }
                  { this.state.isVegan ? "Vegan " : null }
              </p>
          </main>
      )
  }
}

export default App