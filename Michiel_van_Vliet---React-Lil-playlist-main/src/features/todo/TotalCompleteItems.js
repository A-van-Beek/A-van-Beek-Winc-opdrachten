import React from "react";
import { useSelector } from "react-redux";

const TotalCompleteItems = () => {
  const completedTodos = useSelector((state) =>
    state.todos.filter((todo) => todo.completed === true)
  );
  const totalTodos = useSelector((state) => state.todos.length);
  return (
    <h4 className="mt-3">
      Total Complete Items: {completedTodos.length} / {totalTodos}
    </h4>
  );
};

export default TotalCompleteItems;
