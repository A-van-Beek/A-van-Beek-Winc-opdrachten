import * as actions from "../actions/actionTypes";
import data from "../data/data";

const initialState = data;

//data heeft de volgende vorm:
// {
//   student_id: "s2",
//   student_name: "Evelyn",
//   exercise: "SCRUM",
//   difficult_rate: 3,
//   fun_score: 4,
// },

function dataReducer(state = initialState, action) {
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

export default dataReducer;
