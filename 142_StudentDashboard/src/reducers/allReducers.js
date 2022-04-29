// import store from "../store";
import { combineReducers } from "redux";
import dataReducer from "./dataReducer";
// import studentReducer from "./studentReducer";

const allReducers = combineReducers({
  dataReducer: dataReducer,
  // studentReducer: studentReducer,
});

export default allReducers;
