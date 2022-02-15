import React from "react";
import CartItem from "./CartItem";

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [
        { text: "meloen", key: 123 },
        { text: "mango", key: 124 },
      ],
    };
    this.deleteItem = this.deleteItem.bind(this);
  }

  deleteItem(key) {
    var filterdItems = this.state.cartItems.filter(function (cartItems) {
      return cartItems.key !== key;
    });
    this.setState({
      cartItems: filterdItems,
    });
  }

  render() {
    return (
      <section className="pane cart">
        <div className="cart--item">
          <h3>boodschappenmand</h3>
        </div>
        <CartItem entries={this.state.cartItems} delete={this.deleteItem} />
      </section>
    );
  }
}

export default ShoppingCart;
