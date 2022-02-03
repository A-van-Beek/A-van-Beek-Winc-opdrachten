import React from "react";

function GroceryItem(props) {
  const completedStyle = {
    fontStyle: "italic",
    color: "blue",
    textDecoration: "line-through",
  };

  return (
    <ul className="todo-item">
      <li style={props.item.completed ? completedStyle : null}>
        <input
          type="checkbox"
          checked={props.item.completed}
          onChange={() => props.handleChange(props.item.id)}
        />
        {props.item.thing}
      </li>
    </ul>
  );
}

export default GroceryItem;
