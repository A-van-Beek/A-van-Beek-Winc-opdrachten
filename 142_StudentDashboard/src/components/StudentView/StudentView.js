import React from "react";
import store from "../../store";
import "./StudentView.css";
// import { Outlet, Link, renderMatches } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import Student from "./Student";

class StudentView extends React.Component {
  constructor() {
    super();
    this.state = store.getState();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(student_id) {
    console.log(student_id);
  }

  render() {
    const stateStudents = this.state.studentsReducer;
    const students = stateStudents.map((student) => (
      <Student
        key={student.student_id}
        first_name={student.first_name}
        last_name={student.last_name}
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
      </>
    );
  }
}

export default StudentView;
