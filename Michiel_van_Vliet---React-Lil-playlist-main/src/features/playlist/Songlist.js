import React from "react";
import { useSelector } from "react-redux";
import SonglistItem from "./SonglistItem";

const Songlist = () => {
  const playlist = useSelector((state) => state.playlist);

  return (
    <tbody>
      {playlist.map((song) => (
        <SonglistItem
          id={song.id}
          title={song.title}
          artist={song.artist}
          rating={song.rating}
          genre={song.genre}
          key={song.id}
        />
      ))}
    </tbody>
  );
};

export default Songlist;
