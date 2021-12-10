import React from "react";
import hero_img from "../images/Group 77.png";

function Hero() {
  return (
    <section className="hero">
      <img src={hero_img} alt="hero_photo" className="hero--photo" />
      <h1 className="hero--header">Online Experiences</h1>
      <p className="hero--text">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}

export default Hero;
