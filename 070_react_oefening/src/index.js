import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import MyHeader from "./MyHeader";
import MyNavbar from "./MyNavbar";
import MyFooter from "./MyFooter";
import MyMainContent from "./MyMainContent";

ReactDOM.render(
  <div>
    <MyHeader />
    <MyNavbar />
    <MyMainContent />
    <MyFooter />
  </div>,
  document.getElementById("root")
);
