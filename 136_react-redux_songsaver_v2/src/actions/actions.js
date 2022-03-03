import * as actions from "./actionTypes";

export const songAdded = (description) => ({
  type: actions.SONG_ADDED,
  payload: {
    description: description,
  },
});
