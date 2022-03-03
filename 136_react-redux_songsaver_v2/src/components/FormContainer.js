import React, { Component } from "react";
import FormComponent from "./FormComponent";
import { songAdded } from "../actions/actions";
import store from "../store";
import SongList from "./SongList";

class FormContainer extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      artist: "",
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
    var newSong = this.state;
    songAdded(newSong);
    this.setState({
      title: "",
      artist: "",
      genre: "",
      rating: "",
    });
    store.dispatch(songAdded(newSong));
    console.log(newSong, store.getState());
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <FormComponent
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          data={this.state}
        />
        <h1> Your top-list</h1>
        <SongList />
      </div>
    );
  }
}

export default FormContainer;
