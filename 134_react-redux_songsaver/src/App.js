import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";
import Header from "./components/Header";
import SongForm from "./components/SongForm";
import SongList from "./components/SongList";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const songs = useSelector((state) => state.addSongTitle);
  const dispatch = useDispatch();

  console.log(songs);
  return (
    <div className="App">
      <Header />

      <SongForm />

      <h1>Your top-list {counter}</h1>
      <SongList />
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>

      {isLogged ? <h3>Valuable information I shouldn't see</h3> : ""}
    </div>
  );
}

export default App;
