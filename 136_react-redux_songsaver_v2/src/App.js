import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import allReducer from "./reducers/allReducers";
// import bugReducer from "./reducers/bugReducer";
import store from "./store";
// import { bugAdded, bugRemoved, bugResolved } from "./actions/actions";
import { songAdded } from "./actions/actions";
// import { BUG_REMOVED, BUG_RESOLVED } from "./actions/actionTypes";
import Header from "./components/Header";
import FormContainer from "./components/FormContainer";

const unsubscribe = store.subscribe(() => {
  // hier werk je met de DOM elements !
  console.log("Store changed ! ", store.getState());
});

// store.dispatch(bugAdded("bug 1"));
// store.dispatch(bugAdded("bug 2"));
// store.dispatch(bugAdded("bug 3"));
// store.dispatch(bugRemoved(2));
// store.dispatch(bugResolved(1));
// store.dispatch(bugResolved(1));

let newSong = {
  title: "Toen en nu",
  performer: "RoepieRoepie",
  genre: "classic",
  rating: "9",
};
store.dispatch(songAdded(newSong));

unsubscribe();

function App() {
  return (
    <div className="App">
      <Header />
      <FormContainer />
      <h1> Your top-list</h1>
      {/* <Songlist songs={songs} /> */}
    </div>
  );
}

export default App;
