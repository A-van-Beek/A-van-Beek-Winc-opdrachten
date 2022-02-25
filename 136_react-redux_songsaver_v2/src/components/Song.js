import React from "react";

function Song(props) {
  return (
    <div className="song-item">
      <p>
        "{props.title}" van {props.performer} met {props.rating} punten.
        <br />
        Genre: {props.genre}
        <br />
      </p>
    </div>
  );
}

export default Song;
