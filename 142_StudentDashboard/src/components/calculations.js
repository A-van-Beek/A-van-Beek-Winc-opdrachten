import store from "../store";

const myData = store.getState().dataReducer;
let arrayScoreDifficult = myData.map((a) => a.difficult_rate);
let totalScoreDiff = arrayScoreDifficult.reduce(function (
  totalScoreDiff,
  current
) {
  return totalScoreDiff + current;
},
0);

let averageDifficult =
  Math.round((totalScoreDiff / arrayScoreDifficult.length) * 100) / 100;
export default averageDifficult;
