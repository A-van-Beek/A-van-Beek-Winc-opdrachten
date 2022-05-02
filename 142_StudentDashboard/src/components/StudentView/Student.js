import React from "react";
import { Link } from "react-router-dom";
import store from "../../store";

function Student(props) {
  return (
    <li>
      {/* <Link to="/studentOne"> */}
      <button
        className="btn"
        onClick={() => props.handleClick(props.student_id)}
      >
        <i className="fa fa-line-chart"></i>
      </button>
      {props.first_name} {props.last_name} {"  "}
      {/* </Link> */}
    </li>
  );
}

export default Student;
