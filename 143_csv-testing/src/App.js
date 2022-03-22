import React from "react";
import studenten3 from "./studenten3.csv";
import studenten from "./data/studenten.csv";
import * as d3 from "d3";

// deze code werkt
d3.csv(studenten3).then(function (studentInfo) {
  console.log(studentInfo);
});

// const data = d3.dsv(";", studenten, (d) => {
//   return {
//     student_id: d.student_id,
//     first_name: d.first_name,
//     last_name: d.last_name,
//     age: +d.age,
//   };
// });
// console.log(data);

function App() {
  return <div>hier de tekst: </div>;
}

export default App;
