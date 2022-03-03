// import store from "../store";
import { combineReducers } from "redux";
import songReducer from "./songReducer";

const allReducers = combineReducers({
  songReducer: songReducer,
});

export default allReducers;
