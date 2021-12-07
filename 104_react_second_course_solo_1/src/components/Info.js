import React from "react";
import photo from "../images/photo.jpg";
import Buttons from "./Buttons";

function Info() {
  return (
    <div className="card">
      <img src={photo} alt="broken icon" className="info--photo" />
      <h2 className="info--name">Jane Do</h2>
      <h3 className="info--function">web developer</h3>
      <div className="info--website">janedo.website.nl</div>
      <Buttons />
    </div>
  );
}

export default Info;
