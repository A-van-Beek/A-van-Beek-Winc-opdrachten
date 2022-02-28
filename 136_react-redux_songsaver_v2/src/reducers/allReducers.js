// import store from "../store";
import { combineReducers } from "redux";
import bugReducer from "./bugReducer";
import songReducer from "./songReducer";

const allReducers = combineReducers({
  bugReducer: bugReducer,
  songReducer: songReducer,
});

export default allReducers;
