import React from "react";
import store from "../../store";
import "./StudentView.css";
import { Outlet, Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";

function StudentView() {
  return (
    <>
      <Header page="Studenten view" />
      <Navbar />
      <h1>hier overzicht van studenten</h1>
    </>
  );
}

export default StudentView;
