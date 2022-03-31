import React from "react";
// import { Outlet, Link } from "react-router-dom";
// import store from "../../store";
import Header from "../Header/Header";
// import ChartExample from "../ChartExample/ChartExample";
import Navbar from "../Navbar/Navbar";
import averageDifficult from "../calculations";

import "./App.css";

function App() {
  console.log(averageDifficult);
  return (
    <div className="App">
      <Header page="Studenten overzicht" />
      <Navbar />
      <h1>Hier de intro</h1>
    </div>
  );
}

export default App;
