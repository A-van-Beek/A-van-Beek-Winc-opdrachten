import React from "react";
import "../StudentView/StudentView.css";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import Chart from "../Charts/Chart";
import { dataStudent, getShortName } from "../Functions";
import store from "../../store";
import { Link } from "react-router-dom";

class StudentOne extends React.Component {
  constructor() {
    super();
    this.state = store.getState().studentReducer.studentInfo;
    this.filterFinal = this.filterFinal.bind(this);
    this.filterFun = this.filterFun.bind(this);
    this.filterDiff = this.filterDiff.bind(this);
    // this.studentInfo = store.getState().studentReducer.studentInfo.studentInfo;
  }

  // const studentInfo = store.getState().studentReducer.studentInfo.studentInfo;

  //eindopdracht = final assignment
  filterFinal() {
    let studentInfo = dataStudent(this.state.studentInfo[0].student_id);
    let studentShortInfo = [];
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
    this.setState({ studentInfo: studentInfo });
  }

  //fun only
  filterFun = () => {
    let studentInfo = store.getState().studentReducer.studentInfo.studentInfo;
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
    this.setState({ studentInfo: studentInfo });
  };

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
    this.setState({ studentInfo: studentInfo });
  }

  render() {
    const selectedStudent_name =
      store.getState().studentReducer.studentInfo.studentInfo[0].student_name;

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
          <h1>Gekozen student: {selectedStudent_name} </h1>
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

          <Chart key="1" ratingsList={this.state.studentInfo} />
        </div>
        <li>
          <button className="btn">
            {" "}
            <Link to="/studentView">terug naar studenten overzicht</Link>
          </button>
        </li>
      </>
    );
  }
}

export default StudentOne;
