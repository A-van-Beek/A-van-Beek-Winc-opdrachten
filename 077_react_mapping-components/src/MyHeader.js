import React from "react";

const styleBasic = {
  color: "black",
  backgroundColor: "#FF2D00",
  fontSize: "20px",
};

function MyHeader() {
  return (
    <header className="navbar" style={styleBasic}>
      Using .map function in React
    </header>
  );
}

export default MyHeader;
