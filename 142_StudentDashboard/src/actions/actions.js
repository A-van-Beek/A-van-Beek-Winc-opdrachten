import * as actions from "./actionTypes";

export const studentAdded = (description) => ({
  type: actions.STUDENT_ADDED,
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
