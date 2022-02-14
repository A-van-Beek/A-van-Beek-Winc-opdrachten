import React from "react";

class BuyItem extends React.Component {
  constructor(props) {
    super(props);
    this.createTasks = this.createTasks.bind(this);
  }

  delete(key) {
    this.props.delete(key);
  }

  createTasks(item) {
    return (
      <li key={item.key}>
        {item.text}
        <button className="delete-btn" onClick={() => this.delete(item.key)}>
          <i className="gg-trash trash-icon"></i>
        </button>
      </li>
    );
  }

  render() {
    var toBuyEntries = this.props.entries;
    var listItems = toBuyEntries.map(this.createTasks);

    return <ul className="theList">{listItems}</ul>;
  }
}

export default BuyItem;
