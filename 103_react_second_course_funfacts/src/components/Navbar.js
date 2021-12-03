import React from "react";
import reactIconSmall from "../images/reactIconSmall.png";

function Navbar() {
  return (
    <nav className="nav-container">
      <img src={reactIconSmall} alt="broken icon" className="nav--icon" />
      <h3 className="nav--logo_text">ReactFacts</h3>
      <h4 className="nav--title">React Course - Project 1</h4>
    </nav>
  );
}

export default Navbar;
