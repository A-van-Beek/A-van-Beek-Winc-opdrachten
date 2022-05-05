// import store from "../store";
import * as actions from "../actions/actionTypes";

function studentReducer(state = [{ selected_student: "" }], action) {
  switch (action.type) {
    case actions.SELECTED_STUDENT:
      return { selected_student: action.payload };
    case actions.SET_DATA_STUDENT:
      return { studentInfo: action.payload };
    default:
      return state;
  }
}

export default studentReducer;
