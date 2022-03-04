import React from "react";
import store from "./store";
import { songAdded } from "./actions/actions";
import Header from "./components/Header";
import FormContainer from "./components/FormContainer";
import { Outlet, Link } from "react-router-dom";

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
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/about">About</Link> |{" "}
      </nav>
      <FormContainer />
    </div>
  );
}

export default App;
