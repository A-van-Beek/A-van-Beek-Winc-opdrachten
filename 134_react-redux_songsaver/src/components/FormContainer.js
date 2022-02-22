import React, { Component } from "react";
import FormComponent from "./FormComponent";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      performer: "",
      genre: "",
      rating: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
    return this.props;
  }

  handleSubmit(event) {
    console.log(this.state);
    event.preventDefault();
  }

  render() {
    return (
      <FormComponent
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        data={this.state}
      />
    );
  }
}

export default Form;
