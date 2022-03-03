import React from "react";
import store from "./store";
import { songAdded } from "./actions/actions";
import Header from "./components/Header";
import FormContainer from "./components/FormContainer";

// const unsubscribe = store.subscribe(() => {
//   console.log("Store changed ! ", store.getState());
// });

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

// console.log("Store init ! ", store.getState());

function App() {
  return (
    <div className="App">
      <Header />
      <FormContainer />
    </div>
  );
}

export default App;
