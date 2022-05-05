import * as actions from "./actionTypes";

export const selectedStudent = (student_id) => ({
  type: actions.SELECTED_STUDENT,
  payload: {
    selected_student: student_id,
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

export const findStudentName = (student_id) => ({
  type: actions.FIND_STUDENTNAME,
  payload: {
    student_id: student_id,
  },
});

export const setDataStudent = (studentInfo) => ({
  type: actions.SET_DATA_STUDENT,
  payload: {
    studentInfo,
  },
});
