import React from "react";

function Card(props) {
  return (
    <div className="card">
      <img src={`../images/${props.img}`} alt="oeps" className="card--image" />
      <div className="card--stats">
        <img src="../images/Star.png" alt="oeps" className="card--star" />
        <span>{props.rating}</span>
        <span className="gray">({props.reviewCount}) • </span>
        <span className="gray">{props.country}</span>
      </div>
      <p>{props.title}</p>
      <p>
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div>
  );
}

export default Card;
