import React from "react";

import MyHeader from "./components/MyHeader";
import MyMainContent from "./components/MyMainContent";
import MyFooter from "./components/MyFooter";
import TodoItem from "./components/TodoItem";

function App() {
  return (
    <div className="todo-list">
      <MyHeader />
      <MyMainContent />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <MyFooter />
    </div>
  );
}

export default App;
