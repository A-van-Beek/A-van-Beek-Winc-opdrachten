import React from "react";
import { useSelector } from "react-redux";
import AddSong from "./AddSong";
import Songlist from "./Songlist";

const Playlist = () => {
  const allsongs = useSelector((state) => state.playlist);

  return (
    <main>
      <h1>Lil playlist</h1>
      <AddSong />
      <table style={{ width: "100%" }}>
        <thead>
          <tr className="song-header">
            <th className="song-row__item">Song</th>
            <th className="song-row__item">Artist</th>
            <th className="song-row__item">Genre</th>
            <th className="song-row__item">Rating</th>
          </tr>
        </thead>
        <Songlist songs={allsongs} />
      </table>
    </main>
  );
};

export default Playlist;
