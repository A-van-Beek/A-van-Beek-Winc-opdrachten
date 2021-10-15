/**
 * Challenge: Get rid of our warning about not having an onChange on our input.
 * For now, the function that runs onChange can simply console.log something.
 */

import React from "react";

function changeHandler() {
  console.log("You clicked !");
}

function TodoItem(props) {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={props.item.completed}
        onClick={changeHandler}
      />
      <p>{props.item.text}</p>
    </div>
  );
}

export default TodoItem;
