import React from "react";
import Header from "./components/Header";
// import GroceryItem from "./components/GroceryItem";
import List from "./components/List";
import ShoppingCart from "./components/ShoppingCart";
import Split from "react-split";
import "./App.css";

/**
 * leuke plaatjes https://tessakortenbach.nl/2020/10/17/boodschappen-doen-liedje-voor-peuters-en-kleuters/
 */

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [
        { text: "kaki-vrucht", key: 321 },
        { text: "papaya", key: 333 },
      ],
    };
  }

  render() {
    return (
      <div>
        <Header />
        <Split sizes={[30, 70]} direction="vertical" className="split">
          <List />
          <ShoppingCart cartItems={this.state.cartItems} />
        </Split>
      </div>
    );
  }
}

export default App;
