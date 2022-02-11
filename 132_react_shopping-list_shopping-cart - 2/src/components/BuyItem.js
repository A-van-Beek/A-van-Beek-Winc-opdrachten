import React from "react";

class BuyItem extends React.Component {
  createTasks(item) {
    return (
      <li key={item.key}>
        <input type="checkbox" checked={item.completed} />
        {item.text}
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
