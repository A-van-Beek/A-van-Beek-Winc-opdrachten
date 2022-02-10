import React from "react";
import ListItem from "./ListItem";

class List extends React.Component {
  render() {
    return (
      <section className="pane list">
        <form>
          <input placeholder="geef item"></input>
          <button margin-left="10px" type="submit">
            zet op lijst
          </button>
        </form>
        <div className="list--item">
          <h3>boodschappen</h3>
        </div>
        <ListItem />
      </section>
    );
  }
}

export default List;
