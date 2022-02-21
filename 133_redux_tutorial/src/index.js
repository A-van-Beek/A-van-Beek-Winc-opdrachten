import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import allReducer from "./reducers";
import { Provider } from "react-redux";

const myStore = createStore(
  allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={myStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// als je alles in 1 file wilt hebben:
// // STORE -> globalized state

// // ACTION increment
// const increment = () => {
//   return {
//     type: "INCREMENT", // je ziet ook vaak name:
//   };
// };

// const decrement = () => {
//   return {
//     type: "DECREMENT",
//   };
// };

// // REDUCER, deze geeft markering omdat hij een default case verwacht.
// const counter = (state = 0, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return state + 1;
//     case "DECREMENT":
//       return state - 1;
//   }
// };

// let store = createStore(counter);

// // display it in the console
// store.subscribe(() => console.log(store.getState()));

// // DISPATCH
// store.dispatch(increment());

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );
