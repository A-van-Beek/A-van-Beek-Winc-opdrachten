import store from "../store";

const scoreReducer = store.getState().scoreReducer;
var scoreDifficult = 0;

scoreReducer.map(function getScore(item) {
  console.log(item.difficult_score);
  return scoreDifficult;
});

export default scoreDifficult;
