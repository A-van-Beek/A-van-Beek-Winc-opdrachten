import React from "react";

function Card(props) {
  return (
    <div className="card">
      <img className="card-image" src={`../images/${props.img}`} alt="oeps" />
      <div className="info">
        <span className="location">
          <i class="fas fa-map-marker-alt"></i>
          {props.location}
        </span>
        <span className="map">
          <a href={props.googleMap} target="blank">
            View on Google Maps
          </a>
        </span>
        <h1>{props.title}</h1>
        <p>{props.description}.</p>
      </div>
    </div>
  );
}

export default Card;
