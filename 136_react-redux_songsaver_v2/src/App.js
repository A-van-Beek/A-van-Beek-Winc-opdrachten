import React from "react";
import store from "./store";
import { songAdded } from "./actions/actions";
import Header from "./components/Header";
import FormContainer from "./components/FormContainer";
import SongList from "./components/SongList";

// import { useSelector, useDispatch } from "react-redux";
// import allReducer from "./reducers/allReducers";
// import bugReducer from "./reducers/bugReducer";
// import { BUG_REMOVED, BUG_RESOLVED } from "./actions/actionTypes";
// import { bugAdded, bugRemoved, bugResolved } from "./actions/actions";

const unsubscribe = store.subscribe(() => {
  // hier werk je met de DOM elements !
  console.log("Store changed ! ", store.getState());
});

// store.dispatch(bugAdded("bug 1"));

// let newSong = {
//   title: "Toen en nu",
//   performer: "RoepieRoepie",
//   genre: "classic",
//   rating: "9",
// };
// store.dispatch(songAdded(newSong));
console.log("Store init ! ", store.getState());
unsubscribe();

function App() {
  return (
    <div className="App">
      <Header />
      <FormContainer />
      <h1> Your top-list</h1>
      <SongList />
    </div>
  );
}

export default App;
