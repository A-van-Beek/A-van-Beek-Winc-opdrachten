import React from "react";

function Student(props) {
  return (
    <p>
      {props.first_name} {props.last_name}
    </p>
  );
}

export default Student;
