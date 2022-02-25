import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import allReducer from "./reducers/allReducers";
// import bugReducer from "./reducers/bugReducer";
import store from "./store";
import { bugAdded, bugRemoved, bugResolved } from "./actions/actions";
// import { BUG_REMOVED, BUG_RESOLVED } from "./actions/actionTypes";
import Header from "./components/Header";
import Form from "./components/FormContainer";
import Songlist from "./components/SongList";

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

unsubscribe();

function App() {
  return (
    <div className="App">
      <Header />
      <Form />
      <h1> Your top-list</h1>
      {/* <Songlist songs={songs} /> */}
    </div>
  );
}

export default App;
