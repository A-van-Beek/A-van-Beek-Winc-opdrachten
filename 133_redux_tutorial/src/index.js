import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore } from "redux";

// STORE -> globalized state

// ACTION increment
const increment = () => {
  return {
    type: "INCREMENT", // je ziet ook vaak name:
  };
};

const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

// REDUCER, deze geeft markering omdat hij een default case verwacht.
const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
  }
};

let store = createStore(counter);

// display it in the console
store.subscribe(() => console.log(store.getState()));

// DISPATCH
store.dispatch(increment());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
