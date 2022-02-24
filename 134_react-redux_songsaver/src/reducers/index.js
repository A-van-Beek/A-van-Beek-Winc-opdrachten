import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import songTitleReducer from "./songTitleReducer";
import { combineReducers } from "redux";

// deze index verzamelt alle reducers

const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
  songTitles: songTitleReducer,
});

export default allReducers;
