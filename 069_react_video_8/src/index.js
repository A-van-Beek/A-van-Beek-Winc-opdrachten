import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import MyInfo from "./components/MyInfo.js";
import MyFooter from "./components/MyFooter.js";

ReactDOM.render(
  <div>
    {/* <Header /> */}
    <MyInfo />
    <MyFooter />
  </div>,
  document.getElementById("root")
);
