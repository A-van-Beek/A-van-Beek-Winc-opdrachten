import React from "react";
import CartItem from "./CartItem";

export default function ShoppingCart(props) {
  console.log(props.cartItems);
  return (
    <section className="pane cart">
      <div className="cart--item">
        <h3>boodschappenmand</h3>
      </div>
      <CartItem
        entries={props.cartItems}
        // delete={this.deleteItem}
      />
    </section>
  );
}
