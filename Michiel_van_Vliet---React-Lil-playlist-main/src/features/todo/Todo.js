import React from "react";
import "./bootstrap.min.css";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";
import TotalCompleteItems from "./TotalCompleteItems";

const Todo = () => {
  return (
    <main className="container bg-white p-4 mt-5">
      <h1>My Todo List</h1>
      <AddTodoForm />
      <TodoList />
      <TotalCompleteItems />
    </main>
  );
};

export default Todo;
