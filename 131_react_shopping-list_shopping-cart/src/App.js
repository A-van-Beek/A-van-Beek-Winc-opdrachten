import React from "react";
import Header from "./components/Header";
// import GroceryItem from "./components/GroceryItem";
import List from "./components/List";
import ShoppingCart from "./components/ShoppingCart";
import Split from "react-split";
import "./App.css";

/**
 * leuke plaatjes https://tessakortenbach.nl/2020/10/17/boodschappen-doen-liedje-voor-peuters-en-kleuters/
 */

function App() {
  return (
    <div>
      <Header />
      <Split sizes={[30, 70]} direction="vertical" className="split">
        <List />
        <ShoppingCart />
      </Split>
    </div>
  );
}

export default App;
