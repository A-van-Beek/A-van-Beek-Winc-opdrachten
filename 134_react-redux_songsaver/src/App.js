import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";
import Header from "./components/Header";
// import SongForm from "./components/SongForm";
import SongList from "./components/SongList";
import Form from "./components/FormContainer";

function App() {
  // const counter = useSelector((state) => state.counter);
  // const isLogged = useSelector((state) => state.isLogged);
  const songs = useSelector((state) => state.songTitles);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <Header />

      <Form />

      <h1>Your top-list</h1>
      <SongList songs={songs} />
    </div>
  );
}

export default App;
