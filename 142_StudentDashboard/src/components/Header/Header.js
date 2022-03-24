import React from "react";
import iconDashboard from "../../assets/iconDashboard.png";
import "./Header.css";

function Header(props) {
  const headerText = props.page;
  return (
    <header>
      <img src={iconDashboard} alt="problem loading img"></img>
      <h1>{headerText}</h1>
    </header>
  );
}

export default Header;
