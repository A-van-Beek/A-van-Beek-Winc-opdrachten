import React from "react";

function Student(props) {
  // console.log(props);
  return (
    <li>
      <button
        className="chart-btn"
        onClick={() => props.handleClick(props.student_id)}
      >
        <i className="fa fa-line-chart"></i>
      </button>
      {props.first_name} {props.last_name} {"  "}
    </li>
  );
}

export default Student;
