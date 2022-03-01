import React from "react";
import store from "../store";

function SongList() {
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
