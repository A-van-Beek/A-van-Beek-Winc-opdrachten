import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addSong } from "./playlistSlice";

function AddSong() {
  const dispatch = useDispatch();

  const [state, setState] = useState({
    title: "",
    artist: "",
    genre: "",
    rating: "",
  });

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(
      addSong({
        title: state.title,
        artist: state.artist,
        genre: state.genre,
        rating: state.rating,
      })
    );
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setState({
      ...state,
      [event.target.name]: value,
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        name="title"
        placeholder="Title"
        type="text"
        value={state.title.value}
        onChange={handleChange}
      />
      <input
        name="artist"
        placeholder="Artist"
        type="text"
        value={state.artist.value}
        onChange={handleChange}
      />
      <select
        id="genre"
        name="genre"
        value={state.genre.value}
        onChange={handleChange}
      >
        <option value=""></option>
        <option value="rock">Rock</option>
        <option value="jazz">Jazz</option>
        <option value="pop">Pop</option>
      </select>
      <select
        id="rating"
        name="rating"
        value={state.rating.value}
        onChange={handleChange}
      >
        <option value=""></option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <button type="submit">Add Song</button>
    </form>
  );
}

export default AddSong;
