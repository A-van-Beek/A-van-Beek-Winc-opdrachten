import React from "react";
import studenten3 from "./studenten3.csv";
import * as d3 from "d3";

d3.csv(studenten3).then(function (data) {
  console.log(data);
});

function App() {
  return <div>hier de tekst</div>;
}

export default App;
