import exercise from "../data/exercise.csv";
import * as d3 from "d3";

const exerciseInfo = [];
d3.csv(exercise).then(function (exercise) {
  exercise.forEach((d) => {
    exerciseInfo.push({
      exercise_id: d.exercise_id,
      exercise: d.exercise,
    });
    return exerciseInfo;
  });
});

function exerciseReducer(state = exerciseInfo) {
  return state;
}

export default exerciseReducer;
