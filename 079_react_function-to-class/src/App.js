import React from "react";
import "./App.css"; // is deze noodzakelijk??
import todosData from "./todosData";

import MyHeader from "./components/MyHeader";
import MyMainContent from "./components/MyMainContent";
import MyFooter from "./components/MyFooter";
import TodoItem from "./components/TodoItem";

function App() {
  const todoItems = todosData.map((item) => {
    return <TodoItem key={item.id} item={item} />;
  });

  return (
    <div>
      <MyHeader />
      <MyMainContent />
      <div className="todo-list">{todoItems}</div>
      <MyFooter />
    </div>
  );
}

export default App;
