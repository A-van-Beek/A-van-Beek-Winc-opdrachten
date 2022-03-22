import scores from "../data/scores.csv";
import * as d3 from "d3";

const scoreInfo = [];
d3.csv(scores).then(function (score) {
  score.forEach((d) => {
    scoreInfo.push({
      student: d.student,
      exercise_done: d.exercise_done,
      difficult_factor: +d.difficult_factor,
      fun_factor: +d.fun_factor,
    });
    return scoreInfo;
  });
});

function scoreReducer(state = scoreInfo) {
  return state;
}

export default scoreReducer;
