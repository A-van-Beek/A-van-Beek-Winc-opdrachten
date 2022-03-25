import React from "react";
import { Link } from "react-router-dom";

function Student(props) {
  return (
    <li>
      {props.first_name} {props.last_name} {"  "}
      <button
        className="chart-btn"
        onClick={() => props.handleClick(props.student_id)}
      >
        <Link to="/chart">
          <i className="fa fa-line-chart"></i>
        </Link>
      </button>
    </li>
  );
}

export default Student;
