import * as actions from "../actions/actionTypes";
import * as data from "../data";

// let lastId = 0;

function clientReducer(state = data.clients, action) {
  switch (action.type) {
    case actions.BUG_ADDED:
      return state;
    // case actions.BUG_RESOLVED:
    //   return state.map((bug) =>
    //     bug.id !== action.payload.id ? bug : { ...bug, resolved: !bug.resolved }
    //   );
    // case actions.BUG_REMOVED:
    //   return state.filter((bug) => bug.id !== action.payload.id);
    default:
      return state;
  }
}

export default clientReducer;
