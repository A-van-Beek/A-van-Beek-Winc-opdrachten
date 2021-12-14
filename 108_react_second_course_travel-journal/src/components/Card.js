import React from "react";

function Card(props) {
  return (
    <div className="card">
      <img src={props.item.imageUrl} alt="oeps" className="card--image" />
      <div className="card--stats">
        <img
          src="https://www.seekpng.com/png/detail/204-2048201_vector-location-icon-png.png"
          alt="location-logo"
          className="card--location-icon"
        />
        <span>{props.item.location}</span>
        <span>
          <a href="{props.item.googleMapsURL}">View on Google Maps</a>
        </span>
      </div>
      <p className="card--title">{props.item.title}</p>
      <p calssName="card--text">{props.item.description}</p>
    </div>
  );
}

export default Card;
