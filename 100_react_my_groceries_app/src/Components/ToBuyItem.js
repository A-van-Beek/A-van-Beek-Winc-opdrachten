import React, { Component } from "react";
import groceryData from "./groceryData";
/**
 * todosData = groceryItems
 */

class ToBuyItem extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      // character: {},
      groceries: groceryData,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch(groceryData);
    console.log(groceryData);
  }

  handleChange(id) {
    this.setState((prevState) => {
      const updatedGroceries = prevState.groceryItems.map((groceries) => {
        if (groceries.id === id) {
          return {
            ...groceries,
            completed: !groceries.completed,
          };
        }
        return groceries;
      });
      console.log(prevState.groceries);
      console.log(updatedGroceries);
      return {
        groceries: updatedGroceries,
      };
    });
  }

  render() {
    const groceriesItems = this.state.groceries.map((grocerie) => (
      <groceriesItems
        key={grocerie.id}
        item={grocerie}
        handleChange={this.handleChange}
      />
    ));

    return <div className="todo-list">{groceriesItems}</div>;
  }
}

export default ToBuyItem;
