import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import addSongTitleReducer from "./songTitleReducer";
import { combineReducers } from "redux";

// deze index verzamelt alle reducers

const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
  songTitles: addSongTitleReducer,
});

export default allReducers;
