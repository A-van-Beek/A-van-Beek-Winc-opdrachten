import React from "react";

function FormComponent(props) {
  return (
    <main>
      <div className="form-container">
        <h1>To add a new song to list:</h1>

        <form onSubmit={props.handleSubmit}>
          <input
            name="title"
            value={props.data.title}
            onChange={props.handleChange}
            placeholder="title"
          />
          <br />

          <input
            name="artist"
            value={props.data.artist}
            onChange={props.handleChange}
            placeholder="artist"
          />
          <br />

          <select
            value={props.data.genre}
            name="genre"
            onChange={props.handleChange}
          >
            <option value=" ">-- Please Choose genre --</option>
            <option value="pop">pop</option>
            <option value="classic">classic</option>
            <option value="folk">folk</option>
            <option value="jazz">jazz</option>
          </select>

          <br />

          <input
            name="rating"
            type="number"
            value={props.data.rating}
            onChange={props.handleChange}
            placeholder="rating"
          />

          <br />

          <br />

          <button>Submit</button>
        </form>
        <hr />
        <h2>Entered information:</h2>
        <p> Your song: {props.data.title} </p>
        <p> Your artist: {props.data.artist}</p>
        <p> Your genre: {props.data.genre}</p>
        <p> Your rating: {props.data.rating}</p>
        <hr />
      </div>
    </main>
  );
}

export default FormComponent;
