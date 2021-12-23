import React from "react";

function Star(props) {
  const starIcon = props.isFilled ? "star-filled.png" : "star-empty.png";

  return (
    <img
      src={`../images/${starIcon}`}
      alt="oeps-star"
      className="card--favorite"
      onClick={props.handleClick}
    />
  );
}

export default Star;
