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

let ratingsList = [];
exerciseRating.forEach((exercise) => {
  const funRatings = exercise.funRatings;
  const difficultyRatings = exercise.difficultyRatings;

  let funList = [];
  funRatings.forEach((funRating) => {
    funList.push(funRating.rating);
  });

  let difficultyList = [];
  difficultyRatings.forEach((difficultyRating) => {
    difficultyList.push(difficultyRating.rating);
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
      <h1>Grafieken</h1>
      <div>
        Onderstaande grafieken geeft van alle studenten en alle opdrachten de
        fun-score en de moeilijkheidsgraad. <br />
        Dezelfde informatie wordt op twee manieren gepresenteerd, zowel
        horizontaal als vertikaal georiënteerd.
        <br />
        <br />
      </div>

      <Chart ratingsList={ratingsList} />
      <ChartVertical ratingsList={ratingsList} />
    </>
  );
};

export default ChartView;
