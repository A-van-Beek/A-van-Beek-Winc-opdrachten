import React from "react";
// import { Outlet, Link } from "react-router-dom";
// import store from "../../store";
import Header from "../Header/Header";
// import ChartExample from "../ChartExample/ChartExample";
import Navbar from "../Navbar/Navbar";
import MyGaugeChart from "../Charts/MyGaugeChart";
import { averageDifficult, averageFun } from "../Functions";

import "./App.css";

function App() {
  const chartTitle = {
    color: "#6441a5",
    marginLeft: "35px",
  };

  return (
    <div className="App">
      <Header page="Studenten overzicht" />
      <Navbar />
      <h1>Opdracht</h1>
      <div>
        Op deze site worden de resultaten weergegeven van de studenten. Per
        opdracht is door de student een score gegeven voor de moeilijkheidsgraad
        en een score voor de "fun". Onderstaande grafieken geven de gemiddelde
        score van alle studenten en alle opdrachten.
        <br />
        <br />
      </div>
      <MyGaugeChart percent={averageDifficult} />
      <chart-title style={chartTitle}>
        Difficult rate average: {averageDifficult}
      </chart-title>
      <br />
      <br />
      <MyGaugeChart percent={averageFun} />
      <chart-title style={chartTitle}>
        Fun score average: {averageFun}
      </chart-title>
    </div>
  );
}

export default App;
