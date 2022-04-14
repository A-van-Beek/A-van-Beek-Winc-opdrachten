import React from "react";
import store from "../../store";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import Chart from "../Charts/Chart";
import ChartVertical from "./ChartVertical";
import { getShortName, getAverage } from "../Functions";

//ik noem de overkoepelende deel "view" en het
//onderliggende grafiek-deel "chart"
// toegang tot state:
const data = store.getState().dataReducer;

//aanmaken lijst met unieke exercise namen:
const exerciseToList = [];
data.forEach((exercise) => {
  exerciseToList.push(exercise.exercise);
});

const exerciseList = [...new Set(exerciseToList)];
// console.log("exerciseList: ", exerciseList);

//per exercise kijken naar de twee ratings.
//object maken per exercise met beide rating-lijsten
const exerciseRating = [];
let i = 0;
exerciseList.forEach((entry) => {
  let funRatingsList = [];
  let difficultyRatingsList = [];
  data.forEach((object) => {
    if (object.exercise === entry) {
      funRatingsList.push({
        exercise: object.exercise,
        rating: object.fun_score,
      });
      difficultyRatingsList.push({
        exercise: object.exercise,
        rating: object.difficult_rate,
      });
    }
  });
  const newObject = {
    id: i++,
    exercise: entry,
    funRatings: funRatingsList,
    difficultyRatings: difficultyRatingsList,
  };
  exerciseRating.push(newObject);
});

// console.log("exerciseRating: ", exerciseRating);

let ratingsList = [];
exerciseRating.forEach((exercise) => {
  const funRatings = exercise.funRatings;
  const difficultyRatings = exercise.difficultyRatings;

  let funList = [];
  funRatings.forEach((funRating) => {
    // if (isSelected(funRating.name)) {
    funList.push(funRating.rating);
    // }
  });

  let difficultyList = [];
  difficultyRatings.forEach((difficultyRating) => {
    // if (isSelected(difficultyRating.name)) {
    difficultyList.push(difficultyRating.rating);
    // }
  });

  const newRating = {
    exercise: getShortName(exercise.exercise),
    fun_score: getAverage(funList),
    difficult_rate: getAverage(difficultyList),
  };
  ratingsList.push(newRating);
});

const ChartView = () => {
  return (
    <>
      <Header page="Grafisch overzicht" />
      <Navbar />
      <h1>hier</h1>
      <Chart ratingsList={ratingsList} />
      <ChartVertical ratingsList={ratingsList} />
    </>
  );
};

export default ChartView;
