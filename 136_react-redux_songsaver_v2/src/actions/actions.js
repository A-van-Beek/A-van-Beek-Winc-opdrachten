import * as actions from "./actionTypes";

export const songAdded = (description) => ({
  type: actions.SONG_ADDED,
  payload: {
    description: description,
  },
});

export const songDeleted = (id) => ({
  type: actions.SONG_DELETED,
  payload: {
    id, // aangezien id: id afgekort kan worden weergegeven.
  },
});
