// import store from "../store";
import * as actions from "../actions/actionTypes";

function studentReducer(state = [{ selected_student: "" }], action) {
  switch (action.type) {
    case actions.SELECTED_STUDENT:
      return { selected_student: action.payload };
    default:
      return state;
  }
}

export default studentReducer;
