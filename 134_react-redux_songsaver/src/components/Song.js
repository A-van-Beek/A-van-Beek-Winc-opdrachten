import React from "react";

function Song(props) {
  return (
    <div className="song-item">
      <p>
        "{props.title}" van {props.performer} met {props.rating} punten
      </p>
    </div>
  );
}

export default Song;
