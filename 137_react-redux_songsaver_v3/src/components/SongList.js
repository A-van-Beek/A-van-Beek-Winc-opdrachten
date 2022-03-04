import React from "react";
import store from "../store";

function SongList() {
  const unsubscribe = store.subscribe(() => {
    // hier werk je met de DOM elements !
    console.log("Store changed ! ", store.getState());
  });

  unsubscribe();

  const listSongs = store.getState().songReducer;

  const songItems = listSongs.map((item) => (
    <li key={item.id}>
      {item.title} ({item.artist}) met score {item.rating}
    </li>
  ));

  return (
    <div>
      <div className="songlist">{songItems}</div>
    </div>
  );
}

export default SongList;