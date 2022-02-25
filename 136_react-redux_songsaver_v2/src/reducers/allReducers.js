// import store from "../store";
import { combineReducers } from "redux";
import bugReducer from "./bugReducer";

const allReducers = combineReducers({
  bugReducer: bugReducer,
});

export default allReducers;
