import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function MyFunction() {
  return (
    <div>
      <h1>Dit is mijn titel</h1>
      <div>Hier een stukje tekst over mezelf</div>
      <ul>
        <li>Engeland</li>
        <li>Frankrijk</li>
        <li>Duitsland</li>
      </ul>
    </div>
  );
}

ReactDOM.render(<MyFunction />, document.getElementById("root"));
