import React from "react";
import iconDashboard from "../../assets/iconDashboard.png";
import "./Header.css";

function Header() {
  return (
    <header>
      <img src={iconDashboard} alt="problem loading img"></img>
      <h1>Studenten Dashboard</h1>
    </header>
  );
}

export default Header;
