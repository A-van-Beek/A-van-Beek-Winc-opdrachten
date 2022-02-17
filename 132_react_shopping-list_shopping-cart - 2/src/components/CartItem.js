import React from "react";

class CartItem extends React.Component {
  constructor(props) {
    super(props);
    this.createCartItems = this.createCartItems.bind(this);
  }

  delete(key) {
    this.props.delete(key);
  }

  createCartItems(cartItems) {
    return (
      <li key={cartItems.key}>
        <button
          className="delete-btn"
          onClick={() => this.delete(cartItems.key)}
        >
          <i className="gg-trash trash-icon"></i>
        </button>
        {cartItems.text}
      </li>
    );
  }

  render() {
    var toCartEntries = this.props.cartEntries;
    var listCartItems = toCartEntries.map(this.createCartItems);

    return <ul className="theCartList">{listCartItems}</ul>;
  }
}

export default CartItem;
