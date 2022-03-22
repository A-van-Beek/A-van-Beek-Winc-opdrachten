import React from "react";
import { Outlet, Link } from "react-router-dom";
import store from "../../store";
import Header from "../Header/Header";
import ChartExample from "../ChartExample/ChartExample";
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
      <nav>
        <Link to="/">home</Link> |{" "}
        <Link to="/chartExample">chartExample view</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
