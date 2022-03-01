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
      return [...state, { descriptiveArray: action.payload.descriptiveArray }];
    // case actions.SONG_REMOVED:
    //   return state.filter((bug) => bug.id !== action.payload.id);
    default:
      return state;
  }
}

export default songReducer;
