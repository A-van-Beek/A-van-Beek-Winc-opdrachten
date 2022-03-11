import React from "react";
// import { useSelector, useDispatch } from "react-redux";
import "./App.css";
// import allReducer from "./reducers/allReducers";
// import bugReducer from "./reducers/bugReducer";
import store from "./store";
import { bugAdded, bugRemoved, bugResolved } from "./actions/actions";
// import { BUG_REMOVED, BUG_RESOLVED } from "./actions/actionTypes";

const unsubscribe = store.subscribe(() => {
  // hier werk je met de DOM elements !
  console.log("Store changed ! ", store.getState());
});

store.dispatch(bugAdded("bug 1"));
store.dispatch(bugAdded("bug 2"));
store.dispatch(bugAdded("bug 3"));
store.dispatch(bugRemoved(2));
store.dispatch(bugResolved(1));
store.dispatch(bugResolved(1));

// store.dispatch({
//   type: actions.BUG_ADDED,
//   payload: {
//     description: "Bug 2",
//   },
// });

// store.dispatch({
//   type: actions.BUG_REMOVED,
//   payload: {
//     id: 1,
//   },
// });

unsubscribe();

function App() {
  // const dispatch = useDispatch();

  // store.dispatch({
  //   type: "bugAdded",
  //   payload: {
  //     description: "Bug 1",
  //   },
  // });
  // console.log(store.getState());
  return <div className="App">Zie de console.log !!</div>;
}

export default App;
