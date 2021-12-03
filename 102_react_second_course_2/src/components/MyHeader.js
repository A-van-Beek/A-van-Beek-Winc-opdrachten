import React from "react";
import myLogo from "../myLogo192.png";

function MyHeader() {
  return (
    <header>
      <nav className="nav">
        <img
          src={myLogo}
          width="60px"
          className="nav-logo"
          alt="stupid 404 code!"
        />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default MyHeader;
