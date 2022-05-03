import React from "react";
import "../StudentView/StudentView.css";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import Student from "../StudentView/Student";
import Chart from "../Charts/Chart";
import { studentUniqueSort, dataStudent, getShortName } from "../Functions";
import store from "../../store";

class StudentOne extends React.Component {
  constructor() {
    super();
    this.state = [];
    this.filterStudent = this.filterStudent.bind(this);
    this.filterFinal = this.filterFinal.bind(this);
    this.filterFun = this.filterFun.bind(this);
    this.filterDiff = this.filterDiff.bind(this);
  }

  filterStudent(student_id) {
    const studentInfo = dataStudent(student_id);
    this.setState({ studentInfo });
    console.log(this.state);
  }

  //eindopdracht = final assignment
  filterFinal() {
    let studentInfo = dataStudent(this.state.studentInfo[0].student_id);
    const studentShortInfo = [];
    studentInfo.forEach((element) => {
      if (element.exercise.length > 6) {
        const newExercise = {
          student_id: element.student_id,
          student_name: element.student_name,
          exercise: getShortName(element.exercise),
          fun_score: element.fun_score,
          difficult_rate: element.difficult_rate,
        };
        studentShortInfo.push(newExercise);
      }
    });
    studentInfo = studentShortInfo;
    this.setState({ studentInfo });
  }

  //fun only
  filterFun() {
    let studentInfo = dataStudent(this.state.studentInfo[0].student_id);
    let studentFunInfo = [];
    studentInfo.forEach((element) => {
      const newExercise = {
        student_id: element.student_id,
        student_name: element.student_name,
        exercise: getShortName(element.exercise),
        fun_score: element.fun_score,
        difficult_rate: 0,
      };
      studentFunInfo.push(newExercise);
    });
    studentInfo = studentFunInfo;
    this.setState({ studentInfo });
  }

  //difficult only
  filterDiff() {
    let studentInfo = dataStudent(this.state.studentInfo[0].student_id);
    let studentDiffInfo = [];
    studentInfo.forEach((element) => {
      const newExercise = {
        student_id: element.student_id,
        student_name: element.student_name,
        exercise: getShortName(element.exercise),
        fun_score: 0,
        difficult_rate: element.difficult_rate,
      };
      studentDiffInfo.push(newExercise);
    });
    studentInfo = studentDiffInfo;
    this.setState({ studentInfo });
  }

  render() {
    const selectedStudent_id =
      store.getState().studentReducer.selected_student.selected_student;

    const selectedStudent_name = studentUniqueSort.filter(function (student) {
      return student.student_id === selectedStudent_id;
    })[0].student_name;

    const studentInfo = this.state.studentInfo;
    // const students = studentUniqueSort.map((student) => (
    //   <Student
    //     key={student.student_id}
    //     first_name={student.student_name}
    //     student_id={student.student_id}
    //     handleClick={this.filterStudent}
    //   />
    // ));

    return (
      <>
        <Header page="Studenten view" />
        <Navbar />
        <h1>Eén student !</h1>
        <div>
          Binnen de data van een student kan gekozen worden voor weergave van
          alleen eindopdrachten, alleen fun of alleen de moeilijkheidgraad.
          <br />
          <br />
        </div>
        <div>
          <h1>Gekozen student: {selectedStudent_name}</h1>
          <li>
            <button className="btn" onClick={this.filterFinal}>
              <i className="fa fa-filter"> finals only</i>
            </button>
          </li>
          <li>
            <button className="btn" onClick={this.filterFun}>
              <i className="fa fa-filter"> fun only</i>
            </button>
          </li>
          <li>
            <button className="btn" onClick={this.filterDiff}>
              <i className="fa fa-filter"> difficult rate only</i>
            </button>
          </li>

          <br />

          <Chart key="1" ratingsList={studentInfo} />
        </div>
      </>
    );
  }
}

export default StudentOne;
