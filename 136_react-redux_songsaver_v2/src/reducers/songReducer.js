import * as actions from "../actions/actionTypes";

const initialState = [
  {
    id: 0,
    title: "Bohemian Rhapsody",
    artist: "Queen",
    genre: "rock",
    rating: 5,
  },
  {
    id: 1,
    title: "Dancing Queen",
    artist: "Abba",
    genre: "pop",
    rating: 1,
  },
  {
    id: 3,
    title: "To be young, gifted and black",
    artist: "Nina Simone",
    genre: "jazz",
    rating: 3,
  },
];

function songReducer(state = initialState, action) {
  switch (action.type) {
    case actions.SONG_ADDED:
      return [
        ...state,
        {
          id: Date.now(),
          title: action.payload.description.title,
          artist: action.payload.description.artist,
          genre: action.payload.description.genre,
          rating: action.payload.description.rating,
        },
      ];
    case actions.SONG_DELETED:
      console.log("deleting song-id: 1");
      var newState = state.filter(function (song) {
        return song.id !== action.payload.id;
      });
      console.log(newState);
      return newState;
    default:
      return state;
  }
}

export default songReducer;
