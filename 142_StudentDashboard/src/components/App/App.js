import React from "react";
import { Outlet, Link } from "react-router-dom";
import store from "../../store";
import Header from "../Header/Header";
import ChartExample from "../ChartExample/ChartExample";
import Navbar from "../Navbar/Navbar";

import "./App.css";

function App() {
  // console.log(store.getState().docentenReducer);
  // console.log(store.getState().studentsReducer);
  // console.log(store.getState().scoreReducer);
  // console.log(store.getState().exerciseReducer);
  // console.log(store.getState());
  return (
    <div className="App">
      <h1>Studenten overzicht</h1>
      <Header />
      <Navbar />
    </div>
  );
}

export default App;
