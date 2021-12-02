import React from "react";

function MyHeader() {
  return (
    <header>
      <nav className="nav">
        <img
          src="https://tessakortenbach.nl/wp-content/uploads/2020/10/boodschappen-doen.png"
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
