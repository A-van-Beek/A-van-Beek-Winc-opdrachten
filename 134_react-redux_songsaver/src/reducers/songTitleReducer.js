import songData from "../songData";

const addSongTitle = (state = songData, action) => {
  switch (action.type) {
    case "editSong":
      return state + 1;
    case "ADD_SONG":
      return console.log(songData);

    default:
      return state;
  }
};

export default addSongTitle;
