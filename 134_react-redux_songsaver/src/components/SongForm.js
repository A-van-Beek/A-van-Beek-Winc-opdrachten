import React from "react";

function SongForm() {
  const [formData, setSongData] = React.useState({
    id: "",
    title: "",
    performer: "",
    genre: "",
    rating: "",
  });

  // console.log(formData);

  function handleChange(event) {
    const { name, value } = event.target;
    // this.setState({
    //   [name]: value,
    // });
    console.log("adding data to list...");
  }

  // console.log(formData);

  function handleSubmit(event) {
    event.preventDefault();
    console.log("song is added to list");
  }

  return (
    <div className="form-container">
      <h1>To add a new song to list:</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          name="title"
          type="text"
          placeholder="title of song"
          className="form--input"
          onChange={handleChange}
          value={formData.title}
        />
        <input
          name="performer"
          type="text"
          placeholder="performer"
          className="form--input"
          onChange={handleChange}
          value={formData.performer}
        />
        <input
          name="genre"
          type="text"
          placeholder="genre"
          className="form--input"
          onChange={handleChange}
          value={formData.genre}
        />

        <div className="form--marketing">
          <input
            name="rating"
            type="number"
            placeholder="rating"
            onChange={handleChange}
            checked={formData.rating}
          />
        </div>
        <button className="form--submit">Submit song</button>
      </form>
    </div>
  );
}

export default SongForm;
