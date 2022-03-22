import React from "react";
import store from "../../store";
import "./StudentView.css";
import { Outlet, Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

function StudentView() {
  return (
    <>
      <Navbar />
      <h1>hier overzicht van studenten</h1>
    </>
  );
}

export default StudentView;
