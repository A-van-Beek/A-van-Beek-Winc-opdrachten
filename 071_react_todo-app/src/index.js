import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";
import MyHeader from "./components/MyHeader";
import MyFooter from "./components/MyFooter";

ReactDOM.render(
  <div>
    <MyHeader />
    <App />
    <MyFooter />
  </div>,
  document.getElementById("root")
);
