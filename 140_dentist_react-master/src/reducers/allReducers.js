// import store from "../store";
import { combineReducers } from "redux";
import clientReducer from "./clientReducer";

const allReducers = combineReducers({
  clientReducer: clientReducer,
});

export default allReducers;
