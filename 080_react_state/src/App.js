import React from "react";
// alternatief: import React, {Component} from "react"

// https://scrimba.com/p/p4Mrt9/cQnMDHD

class App extends React.Component {
  //of bij alternatief hierboven: class App extends Component
  constructor() {
    super();
    this.state = {
      answer: "Yes",
    };
  }

  render() {
    return (
      <div>
        <h1>Is state important to know? {this.state.answer}</h1>
      </div>
    );
  }
}

export default App;
