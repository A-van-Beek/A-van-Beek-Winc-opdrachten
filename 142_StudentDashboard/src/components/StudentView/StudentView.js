import React from "react";
import "./StudentView.css";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import Student from "./Student";
import { studentUniqueSort, dataStudent } from "../Functions";
import * as actions from "../../actions/actions";
import store from "../../store";

class StudentView extends React.Component {
  constructor() {
    super();
    this.state = [];
    this.filterStudent = this.filterStudent.bind(this);
  }

  //mijn handeClick:
  filterStudent(student_id) {
    const studentInfo = dataStudent(student_id);
    store.dispatch(actions.setDataStudent(studentInfo));
  }

  render() {
    const students = studentUniqueSort.map((student) => (
      <Student
        key={student.student_id}
        first_name={student.student_name}
        student_id={student.student_id}
        handleClick={this.filterStudent}
      />
    ));

    return (
      <>
        <Header page="Studenten view" />
        <Navbar />
        <h1>De studenten</h1>
        <div>
          Op dit moment is er data van onderstaande studenten. <br />
          Door het klikken op de icoontjes kan gefilterd worden op één student.{" "}
          <br />
        </div>
        <div>{students}</div>
      </>
    );
  }
}

export default StudentView;
