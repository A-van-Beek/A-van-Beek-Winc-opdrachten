import React from "react";
import { Link } from "react-router-dom";

function Student(props) {
  return (
    <li>
      <Link
        to={`/studentOne/${props.first_name}`}
        onClick={() => props.handleClick(props.student_id)}
      >
        <button className="btn">
          <i className="fa fa-line-chart"></i>
        </button>
        {props.first_name} {props.last_name} {"  "}
      </Link>
    </li>
  );
}

export default Student;
