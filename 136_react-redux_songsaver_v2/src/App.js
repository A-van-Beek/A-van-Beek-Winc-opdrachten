import React from "react";
import store from "./store";
import { songAdded } from "./actions/actions";
import Header from "./components/Header";
import FormContainer from "./components/FormContainer";

// import { useSelector, useDispatch } from "react-redux";
// import allReducer from "./reducers/allReducers";

const unsubscribe = store.subscribe(() => {
  console.log("Store changed ! ", store.getState());
});

// /**
//  * hardcoded new song
//  */
// const newSong = {
//   title: "TjaTjaTja",
//   artist: "FadoForEver",
//   genre: "pop",
//   rating: 3,
// };
// console.log(newSong.title);
// // store.dispatch(songAdded(newSong));

console.log("Store init ! ", store.getState());
unsubscribe();

function App() {
  return (
    <div className="App">
      <Header />
      <FormContainer />
    </div>
  );
}

export default App;
