import * as actions from "../actions/actionTypes";

function songReducer(state = [], action) {
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
