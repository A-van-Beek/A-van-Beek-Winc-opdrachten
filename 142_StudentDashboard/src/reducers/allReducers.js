// import store from "../store";
import { combineReducers } from "redux";
import studentsReducer from "./studentsReducer";
import docentenReducer from "./docentenReducer";
import scoreReducer from "./scoreReducer";
import exerciseReducer from "./exerciseReducer";

const allReducers = combineReducers({
  studentsReducer: studentsReducer,
  docentenReducer: docentenReducer,
  scoreReducer: scoreReducer,
  exerciseReducer: exerciseReducer,
});

export default allReducers;
