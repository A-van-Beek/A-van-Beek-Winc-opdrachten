import React from "react";
import listData from "./listData";
import ListItem from "./ListItem";

class List extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: listData,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState((prevState) => {
      const updatedTodos = prevState.todos.map((todo) => {
        if (todo.id === id) {
          console.log(`item: ${id}, ${todo.title}, ${todo.completed}`);
          console.log(`gewijzigd: ${!todo.completed}`);
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
      // console.log(prevState.todos);
      // console.log(updatedTodos);
      return {
        todos: updatedTodos,
      };
    });
  }

  render() {
    const todoItems = this.state.todos.map((item) => (
      <ListItem key={item.id} item={item} handleChange={this.handleChange} />
    ));

    return (
      <section className="pane list">
        <div className="list--item">
          <h3>boodschappen</h3>
        </div>
        {todoItems}
      </section>
    );
  }
}

export default List;
