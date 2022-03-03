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
    default:
      return state;
  }
}

export default songReducer;
