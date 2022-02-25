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
            name="performer"
            value={props.data.performer}
            onChange={props.handleChange}
            placeholder="performer"
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
        <p> Your performer: {props.data.performer}</p>
        <p> Your genre: {props.data.genre}</p>
        <p> Your rating: {props.data.rating}</p>
      </div>
    </main>
  );
}

export default FormComponent;
