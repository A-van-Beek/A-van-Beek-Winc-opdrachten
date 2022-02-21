import React from "react";
import BuyItem from "./BuyItem";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.items,
      cartItems: props.cartItems,
    };
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.itemToCart = this.itemToCart.bind(this);
  }

  addItem(e) {
    if (this._inputElement.value !== "") {
      var newItem = {
        text: this._inputElement.value,
        key: Date.now(),
      };
      console.log(`op lijstje: ${newItem.text}`);

      this.setState((prevState) => {
        return {
          items: prevState.items.concat(newItem),
          cartItems: prevState.cartItems,
        };
      });
      this._inputElement.value = "";
    }
    e.preventDefault();
  }

  deleteItem(key) {
    var toDeleteItem = this.state.items.filter(function (item) {
      return item.key === key;
    });
    console.log(`delete item van lijst: ${toDeleteItem[0].text}`);

    var filterdItems = this.state.items.filter(function (item) {
      return item.key !== key;
    });
    this.setState((prevState) => {
      return {
        items: filterdItems,
        cartItems: prevState.cartItems,
      };
    });
  }

  itemToCart(key) {
    var itemToFind = this.state.items.filter(function (item) {
      return item.key === key;
    });
    var cartItemsNew = this.state.cartItems.concat(itemToFind);
    console.log(`in wagentje: ${itemToFind[0].text}`);
    this.setState((prevState) => {
      return {
        items: prevState.items,
        cartItems: cartItemsNew,
      };
    });
  }

  render() {
    // console.log("cartItems vanuit mandje:");
    // console.log(this.state.cartItems);
    return (
      <section className="pane list">
        <form onSubmit={this.addItem}>
          <input
            ref={(a) => (this._inputElement = a)}
            placeholder="geef item"
          ></input>
          <button margin-left="10px" type="submit">
            zet op lijst
          </button>
        </form>
        <div className="list--item">
          <h3>boodschappen</h3>
        </div>
        <BuyItem
          entries={this.state.items}
          delete={this.deleteItem}
          toCart={this.itemToCart}
        />
      </section>
    );
  }
}

export default List;
