import React from "react";
import store from "./store";
import Header from "./components/Header";
import FormContainer from "./components/FormContainer";
import { songAdded } from "./actions/actions";
import SongList from "./components/SongList";

const unsubscribe = store.subscribe(() => {
  // hier werk je met de DOM elements !
  console.log("Store changed ! ", store.getState());
});

const newSong = {
  title: "TjaTjaTja",
  artist: "FadoForEver",
  genre: "pop",
  rating: 3,
};
console.log(newSong.title);
// store.dispatch(songAdded(newSong));
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
