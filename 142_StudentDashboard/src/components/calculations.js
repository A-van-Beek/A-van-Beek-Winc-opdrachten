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

export const averageDifficult =
  Math.round((totalScoreDiff / arrayScoreDifficult.length) * 100) / 100;

let arrayScoreFun = myData.map((a) => a.fun_score);
let totalScoreFun = arrayScoreFun.reduce(function (totalScoreFun, current) {
  return totalScoreFun + current;
}, 0);

export const averageFun =
  Math.round((totalScoreFun / arrayScoreFun.length) * 100) / 100;
