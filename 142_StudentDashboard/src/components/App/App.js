import React from "react";
import store from "../../store";
import Header from "../Header/Header";
import ChartExample from "../ChartExample/ChartExample";

function App() {
  // console.log(store.getState().docentenReducer);
  console.log(store.getState().studentsReducer);
  console.log(store.getState().scoreReducer);
  console.log(store.getState().exerciseReducer);
  // console.log(store.getState());
  return (
    <div className="App">
      <Header />
      <main>
        {/* <h1>Student Dashboard, overview</h1> */}
        <ChartExample />
      </main>
    </div>
  );
}

export default App;
