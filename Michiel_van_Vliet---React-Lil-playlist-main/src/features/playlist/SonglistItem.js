import React from "react";
import { useDispatch } from "react-redux";
import { removeSong } from "./playlistSlice";

const SonglistItem = ({ id, title, artist, genre, rating }) => {
  const dispatch = useDispatch();

  const handleDeleteSong = () => {
    dispatch(removeSong({ id: id }));
  };

  return (
    <tr>
      <td className="song-row__item">{title}</td>
      <td className="song-row__item">{artist}</td>
      <td className="song-row__item">{genre}</td>
      <td className="song-row__item">{rating}</td>
      <td>
        <button onClick={handleDeleteSong}>Remove</button>
      </td>
    </tr>
  );
};

export default SonglistItem;
