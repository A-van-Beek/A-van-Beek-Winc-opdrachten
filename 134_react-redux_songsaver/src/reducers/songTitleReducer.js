import songData from "../songData";

const songTitles = (state = songData, action) => {
  switch (action.type) {
    case "editSong":
      return state + 1;
    case "ADD_SONG":
      return state;

    default:
      return state;
  }
};

export default songTitles;
