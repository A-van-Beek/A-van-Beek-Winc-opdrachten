import songData from "../songData";

// create a 'reducer' function that determines what the new state
// should be when something happens in the app

const songTitles = (state = songData, action) => {
  // reducers usually look at the type of action that happend
  // to decide how to update the state
  switch (action.type) {
    case "editSong":
      return state + 1; // dit natuurlijk nog aanpassen !
    case "ADD_SONG":
      return { ...state, value: state.value + 1 };

    default:
      return state;
  }
};

export default songTitles;

/**
 * maakt gebruik van de state []
 * dit voorbeeld maakt gebruik van if-else,
 * maar je kan ook kiezen voor switch
 *
 * let lastId = 0;
 *
 * function reducer(state = [], action) {
 *  if (action.type === 'bugAdded')
 *    return [
 *      ...state,
 *      {
 *        id: ++lastId,
 *        description: action.payload.description,
 *        resolved: false
 *      }
 *    ]
 *    else if (action.type === 'bugRemoved')
 *      return state.filtre(bug => bug.id !== action.payload.id);
 *      }
 *    return state;
 */
