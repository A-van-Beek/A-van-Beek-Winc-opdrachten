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
    this.state = store.getState().dataReducer;
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(student_id) {
    console.log(student_id);
  }

  render() {
    function filterStudents(data, key) {
      return [...new Map(data.map((x) => [key(x), x])).values()];
    }
    const studentUnique = filterStudents(this.state, (it) => it.student_id);
    const studentUniqueSort = studentUnique.sort((a, b) => {
      let fa = a.student_name,
        fb = b.student_name;
      if (fa < fb) {
        return -1;
      }
      if (fa > fb) {
        return 1;
      }
      return 0;
    });

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
      </>
    );
  }
}

export default StudentView;
