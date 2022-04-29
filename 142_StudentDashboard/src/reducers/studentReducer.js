// import store from "../store";
import * as actions from "../actions/actionTypes";

function studentReducer(state = [], action) {
  switch (action.type) {
    case actions.SELECTED_STUDENT:
      return action.payload.student_id;
    default:
      return state;
  }
}

export default studentReducer;
