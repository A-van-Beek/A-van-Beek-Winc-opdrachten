import React from "react";
import CartItem from "./CartItem";

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.items,
      cartItems: props.cartItems,
    };
    this.deleteCartItem = this.deleteCartItem.bind(this);
  }

  deleteCartItem(key) {
    var toDeleteCartItem = this.state.cartItems.filter(function (item) {
      return item.key === key;
    });
    console.log(`delte item in winkelwagen: ${toDeleteCartItem[0].text}`);
    var filterdCartItems = this.state.cartItems.filter(function (item) {
      return item.key !== key;
    });
    this.setState((prevState) => {
      return {
        items: prevState.items,
        cartItems: filterdCartItems,
      };
    });
  }

  render() {
    // console.log("cartItems vanuit Cart:");
    // console.log(this.state.cartItems);
    return (
      <section className="pane cart">
        <div className="cart--item">
          <h3>boodschappenmand</h3>
        </div>
        <CartItem
          cartEntries={this.state.cartItems}
          delete={this.deleteCartItem}
        />
      </section>
    );
  }
}

export default ShoppingCart;
