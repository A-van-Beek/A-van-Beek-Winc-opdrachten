import React from "react";
import store from "../../store";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import Chart from "../Charts/Chart";

class StudentView extends React.Component {
  constructor() {
    super();
    this.state = store.getState().dataReducer;
  }

  render() {
    //create DOM-elementen:
    return (
      <>
        <Header page="Grafisch overzicht" />
        <Navbar />
        <h1>hier de grafieken</h1>
        <Chart />
      </>
    );
  }
}

export default StudentView;
