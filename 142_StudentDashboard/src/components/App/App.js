import React from "react";
// import { Outlet, Link } from "react-router-dom";
// import store from "../../store";
import Header from "../Header/Header";
// import ChartExample from "../ChartExample/ChartExample";
import Navbar from "../Navbar/Navbar";
import average from "../calculations";

import "./App.css";

function App() {
  // console.log(store.getState().docentenReducer);
  // console.log(store.getState().studentsReducer);
  // console.log(store.getState().scoreReducer);
  // console.log(store.getState().exerciseReducer);
  // console.log(store.getState());
  console.log(average);
  return (
    <div className="App">
      <Header page="Studenten overzicht" />
      <Navbar />
      <h1>Hier de intro</h1>
    </div>
  );
}

export default App;
