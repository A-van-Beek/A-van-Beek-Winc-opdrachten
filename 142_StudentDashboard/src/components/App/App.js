import React from "react";
// import { Outlet, Link } from "react-router-dom";
import store from "../../store";
import Header from "../Header/Header";
// import ChartExample from "../ChartExample/ChartExample";
import Navbar from "../Navbar/Navbar";
// import average from "../calculations";

import "./App.css";

function App() {
  //test deel, deze werkt
  let originalArray = [
    { name: "John", age: 23, color: "red" },
    { name: "Ann", age: 21, color: "blue" },
    { name: "Mike", age: 13, color: "green" },
  ];

  let result = originalArray.map((a) => a.age);
  console.log(result);
  //

  //nu mijn eigen:
  const myData = store.getState().dataReducer;
  let result2 = myData.map((a) => a.fun_score);
  console.log(result2);

  // //straks nodig: Getting One Value from an Array of Items or sum of array
  // var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  // var total = numbers.reduce(function(total, current) {
  //     return total + current;
  // }, 0);

  // console.log(total);
  // //

  return (
    <div className="App">
      <Header page="Studenten overzicht" />
      <Navbar />
      <h1>Hier de intro</h1>
    </div>
  );
}

export default App;
