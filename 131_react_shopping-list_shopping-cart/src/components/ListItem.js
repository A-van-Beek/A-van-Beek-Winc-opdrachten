import React from "react";

function ListItem(props) {
  const completedStyle = {
    fontStyle: "italic",
    color: "blue",
    textDecoration: "line-through",
  };

  return (
    <ul className="list-item">
      <li style={props.item.completed ? completedStyle : null}>
        <input
          type="checkbox"
          checked={props.item.completed}
          onChange={() => props.handleChange(props.item.id)}
        />
        {props.item.title}
      </li>
    </ul>
  );
}

export default ListItem;
