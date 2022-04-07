import React from "react";

function Student(props) {
  // console.log(props);
  return (
    <li>
      {props.first_name} {props.last_name} {"  "}
      <button
        className="chart-btn"
        onClick={() => props.handleClick(props.student_id)}
      >
        <i className="fa fa-line-chart"></i>
      </button>
    </li>
  );
}

export default Student;
