import React from "react";
import Song from "./Song";

function SongList(props) {
  console.log(props.songs);
  const songList = props.songs.map((song) => (
    <Song
      key={song.id}
      title={song.title}
      performer={song.performer}
      rating={song.rating}
    />
  ));
  return (
    <div>
      <div className="songlist">{songList}</div>
    </div>
  );
}

export default SongList;
