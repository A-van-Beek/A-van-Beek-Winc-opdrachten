import React from "react";
import BuyItem from "./BuyItem";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [{ text: "appels", key: 123 }],
    };
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  addItem(e) {
    if (this._inputElement.value !== "") {
      var newItem = {
        text: this._inputElement.value,
        key: Date.now(),
      };
      console.log(newItem);

      this.setState((prevState) => {
        return {
          items: prevState.items.concat(newItem),
        };
      });
      this._inputElement.value = "";
    }
    e.preventDefault();
  }

  deleteItem(key) {
    var filterdItems = this.state.items.filter(function (item) {
      return item.key !== key;
    });
    this.setState({
      items: filterdItems,
    });
  }

  render() {
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
        <BuyItem entries={this.state.items} delete={this.deleteItem} />
      </section>
    );
  }
}

export default List;
