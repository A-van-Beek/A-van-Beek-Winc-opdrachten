import React from "react";
import store from "../../store";
import "./StudentView.css";
// import { Outlet, Link, renderMatches } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import Student from "./Student";
import Chart from "../Charts/Chart";
import { getShortName, getAverage, studentUniqueSort } from "../Functions";

class StudentView extends React.Component {
  constructor() {
    super();
    this.state = store.getState().dataReducer;
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(student_id) {
    console.log(student_id);
    // filteren op student_id:
    const data = store.getState().dataReducer;
    const dataStudent = data.filter(
      (student) => student.student_id === student_id
    );
    console.log(dataStudent);
  }

  render() {
    const students = studentUniqueSort.map((student) => (
      <Student
        key={student.student_id}
        first_name={student.student_name}
        student_id={student.student_id}
        handleClick={this.handleClick}
      />
    ));

    return (
      <>
        <Header page="Studenten view" />
        <Navbar />
        <h1>hier overzicht van studenten</h1>
        <div>{students}</div>
        <hr />
        {/* <Chart /> */}
      </>
    );
  }
}

export default StudentView;
