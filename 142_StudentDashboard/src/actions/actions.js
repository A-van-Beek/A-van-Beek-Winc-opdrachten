import * as actions from "./actionTypes";

export const selectedStudent = (student_id) => ({
  type: actions.SELECTED_STUDENT,
  payload: {
    student_id: student_id,
  },
});

export const getAverage = (list) => ({
  type: actions.GET_AVERAGE,
  payload: {},
});

export const addExercise = (description) => ({
  type: actions.ADD_EXERCISE,
  payload: {
    description: description,
  },
});
