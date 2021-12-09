import React from "react";
import airbnb_logo from "../images/Vector.png";

function Navbar() {
  return (
    <nav>
      <img src={airbnb_logo} alt="airbnb_logo" className="nav--logo" />
    </nav>
  );
}

export default Navbar;
