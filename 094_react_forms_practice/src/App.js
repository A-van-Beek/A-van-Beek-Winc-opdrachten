import React, { Component } from "react";

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
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      destination: "",
      isVegan: false,
      isKosher: false,
      isLactoseFree: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({
          [name]: checked,
        })
      : this.setState({
          [name]: value,
        });
  }

  handleSubmit(event) {
    event.preventDefault();
    alert("Yes");
  }

  render() {
    return (
      <main>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.firstName}
            name="firstName"
            placeholder="First Name"
            onChange={this.handleChange}
          />
          <br />
          <input
            type="text"
            value={this.state.lastName}
            name="lastName"
            placeholder="Last Name"
            onChange={this.handleChange}
          />
          <br />
          <input
            type="number"
            value={this.state.age}
            name="age"
            placeholder="Age"
            onChange={this.handleChange}
          />
          <br />
          <label>
            Gender
            <br />
            <input
              type="radio"
              name="gender"
              value="male"
              checked={this.state.gender === "male"}
              onChange={this.handleChange}
            />
            Male
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={this.state.gender === "female"}
              onChange={this.handleChange}
            />
            Female
          </label>
          <br />
          <br />
          <label>Destination: </label>
          <select
            value={this.state.destination}
            onChange={this.handleChange}
            name="destination"
          >
            <option value="">--- pick a destination --- </option>
            <option value="paris">Paris</option>
            <option value="london">London</option>
            <option value="amsterdam">Amsterdam</option>
            <option value="berlin">Berlin</option>
          </select>
          <br />
          <br />

          <label>
            Dietary restrictions
            <br />
            <input
              type="checkbox"
              name="isVegan"
              checked={this.state.isVegan}
              onChange={this.handleChange}
            />
            Vegan?
            <input
              type="checkbox"
              name="isKosher"
              checked={this.state.isKosher}
              onChange={this.handleChange}
            />
            Kosher?
            <input
              type="checkbox"
              name="isLactoseFree"
              checked={this.state.isLactoseFree}
              onChange={this.handleChange}
            />
            Lactose free?
          </label>

          <br />
          <br />
          <button>Submit</button>
          {/* create alert with the entered info*/}
        </form>
        <hr />
        <h2>Entered information:</h2>
        <p>
          Your name: {this.state.firstName} {this.state.lastName}
        </p>
        <p>Your age: {this.state.age}</p>
        <p>Your gender: {this.state.gender}</p>
        <p>
          Your destination: {this.state.destination}
          <br />
          <br />
        </p>
        <p>Vegan: {this.state.isVegan ? "yes" : "no"}</p>
        <p>Kosher: {this.state.isKosher ? "yes" : "no"}</p>
        <p>Lactose free: {this.state.isLactoseFree ? "yes" : "no"}</p>
      </main>
    );
  }
}

export default App;
