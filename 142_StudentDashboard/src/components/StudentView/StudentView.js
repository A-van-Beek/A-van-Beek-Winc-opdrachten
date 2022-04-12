import React from "react";
import store from "../../store";
import "./StudentView.css";
// import { Outlet, Link, renderMatches } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import Student from "./Student";
import Chart from "../Charts/Chart";
import {
  getShortName,
  getAverage,
  studentUniqueSort,
  dataStudent,
} from "../Functions";

class StudentView extends React.Component {
  constructor() {
    super();
    this.state = {
      studentUniqueSort,
    };
    this.filterStudent = this.filterStudent.bind(this);
  }

  //mijn handeClick:
  filterStudent(student_id) {
    console.log(student_id);
    const studentInfo = dataStudent(student_id);
    console.log(studentInfo);
    const soloChart = <Chart ratingsList={studentInfo} />;
    return soloChart;
  }

  render() {
    const students = studentUniqueSort.map((student) => (
      <Student
        key={student.student_id}
        first_name={student.student_name}
        student_id={student.student_id}
        studentSelected={false}
        handleClick={this.filterStudent}
      />
    ));

    // const studentInfo = dataStudent("s1");
    // console.log(studentInfo);

    return (
      <>
        <Header page="Studenten view" />
        <Navbar />
        <h1>hier overzicht van studenten</h1>
        <div>{students}</div>
        <hr />
        {/* <Chart ratingsList={studentInfo} /> */}
      </>
    );
  }
}

export default StudentView;
