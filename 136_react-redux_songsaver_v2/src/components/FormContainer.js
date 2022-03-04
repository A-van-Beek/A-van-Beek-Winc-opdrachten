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
    this.onClick = this.onClick.bind(this);
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

  onClick(event) {
    this.setState({
      id: "",
    });
    store.dispatch(songDeleted(1));
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
        <hr />
        <button onClick={this.onClick}>delete Dancing Queen</button>
      </div>
    );
  }
}

export default FormContainer;
