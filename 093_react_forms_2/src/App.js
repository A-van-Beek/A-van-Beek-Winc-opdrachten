import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      someText: "",
      isFriendly: false,
      gender: "",
      favColor: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    /*
    volgende regel lezen als:
    als de type gelijk is aan checkbox, dan is de name-value zoals checked,
    anders is de name-value de input 
     */
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  }

  handleSubmit(event) {
    // hier verdere actie
  }

  render() {
    return (
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
        <textarea
          value={this.state.someText}
          name="someText"
          placeholder="Some Text"
          onChange={this.handleChange}
        />
        <br />
        <label>
          <input
            type="checkbox"
            name="isFriendly"
            checked={this.state.isFriendly}
            onChange={this.handleChange}
          />{" "}
          Is friendly?
        </label>
        <br />
        <label>
          <input
            type="radio"
            // beide radio-buttons hebben dezelfde naam,
            // zodat er slechts 1 gekozen kan worden !!
            name="gender"
            value="male"
            checked={this.state.gender === "male"}
            onChange={this.handleChange}
          />{" "}
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
          />{" "}
          Female
        </label>
        <br />

        <label>Favorite Color:</label>
        <select
          value={this.state.favColor}
          onChange={this.handleChange}
          name="favColor"
        >
          <option value="empty">pick a color</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="red">Red</option>
          <option value="orange">Orange</option>
          <option value="yellow">Yellow</option>
        </select>

        <h1>Check this.state:</h1>
        <h3>
          First name: {this.state.firstName}
          <br />
          Last name: {this.state.lastName}
          <br />
          Some text: {this.state.someText}
          <br />
          Friendly: {this.state.isFriendly}
          <br />
          Gender: {this.state.gender}
          <br />
          Favorite color: {this.state.favColor}
          <br />
        </h3>
        <button>Submit</button>
      </form>
    );
  }
}

export default App;
