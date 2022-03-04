import React, { Component } from "react";
import FormComponent from "./FormComponent";
import { songAdded, songDeleted } from "../actions/actions";
import store from "../store";
import SongList from "./SongList";

// /**
//  * hardcoded new song
//  */
const newSong = {
  id: 6,
  title: "TjaTjaTja",
  artist: "FadoForEver",
  genre: "pop",
  rating: 3,
};
// console.log(newSong.title);
store.dispatch(songAdded(newSong));
store.dispatch(songDeleted(1));

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
