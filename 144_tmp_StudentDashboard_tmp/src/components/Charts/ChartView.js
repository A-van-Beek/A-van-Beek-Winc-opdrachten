import React from "react";
import store from "../../store";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import Chart from "../Charts/Chart";
import { useSelector } from "react-redux";

//ik noem de overkoepelende deel "view" en het
//onderliggende grafiek-deel "chart"
// bij Michiel heet dit: Chart

// toegang tot state:
const data = store.getState().dataReducer;

// functie getAverage voor een list in props.
const getAverage = (list) => {
  if (list.length === 0) {
    return 0;
  } else {
    let total = 0;
    list.forEach((number) => {
      total += number;
    });
    return total / list.length;
  }
};

//functie voor het afkorten van lange assignment-namen
const getShortName = (assignmentName) => {
  if (assignmentName.length > 6) {
    return assignmentName.slice(0, 5) + "*";
  } else {
    return assignmentName;
  }
};

//functie voor unieke lijst exercises
const getExerciseNames = (data) => {
  let exerciseList = [];
  let uniqueExercise = [
    ...new Map(data.map((item) => [item["exercise"], item])).values(),
  ];
  uniqueExercise.forEach((item) => {
    exerciseList.push(item.exercise);
  });
  return exerciseList;
};

const ChartView = () => {
  console.log("unieke lijst exercises: ", getExerciseNames(data));

  // const students = useSelector((state) => state.students);
  // const assignments = useSelector((state) => state.assignments);

  // const isSelected = (studentName) => {
  //   const student = students.find((student) => student.name === studentName);
  //   return student.isSelected;
  // };

  // let ratingsList = [];
  // assignments.forEach((assignment) => {
  //   const funRatings = assignment.funRatings;
  //   const difficultyRatings = assignment.difficultyRatings;

  //   let funList = [];
  //   funRatings.forEach((funRating) => {
  //     if (isSelected(funRating.name)) {
  //       funList.push(funRating.rating);
  //     }
  //   });

  //   let difficultyList = [];
  //   difficultyRatings.forEach((difficultyRating) => {
  //     if (isSelected(difficultyRating.name)) {
  //       difficultyList.push(difficultyRating.rating);
  //     }
  //   });

  //   const newRating = {
  //     assignment: getShortName(assignment.name),
  //     averageFunRating: getAverage(funList),
  //     averageDifficultyRating: getAverage(difficultyList),
  //   };

  //   ratingsList.push(newRating);
  // });

  return (
    <>
      <Header page="Grafisch overzicht" />
      <Navbar />
      <h1>hier</h1>
      <Chart />
    </>
  );
};

export default ChartView;
