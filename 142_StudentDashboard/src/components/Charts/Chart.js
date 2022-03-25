import React from "react";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import store from "../../store";

class Chart extends React.Component {
  constructor() {
    super();
    this.state = store.getState();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(student_id) {
    console.log(student_id);
  }
  render() {
    return (
      <>
        <Header page="Grafisch overzicht" />
        <Navbar />
        <h1>hier de grafieken</h1>
      </>
    );
  }
}

export default Chart;
