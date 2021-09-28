import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./components/App";
import MyFooter from "./components/MyFooter";
import MyHeader from "./components/MyHeader";
import MyMainContent from "./components/MyMainContent";

ReactDOM.render(
  <div>
    <MyHeader />
    <MyMainContent />
    <MyFooter />
  </div>,
  document.getElementById("root")
);
