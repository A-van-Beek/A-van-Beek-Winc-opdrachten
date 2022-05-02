import * as actions from "../actions/actionTypes";

const initialState = [{ funAverage: 0 }, { diffAverage: 0 }];
// dit is nog lariekoek !
function averageReducer(state = initialState, action) {
  switch (action.type) {
    case actions.ADD_EXERCISE:
      return [
        ...state,
        {
          student_id: "s2",
          student_name: "Evelyn",
          exercise: "222",
          difficult_rate: 3,
          fun_score: 4,
        },
      ];
    default:
      return state;
  }
}

export default averageReducer;
