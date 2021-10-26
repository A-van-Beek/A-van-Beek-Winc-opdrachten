import React, { Component } from "react";
import Conditional from "./Conditional";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  // componentDidMount() {
  //   setTimeout(() => {
  //     this.setState({ isLoggedIn: true });
  //   }, 3500);
  // }

  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   console.log(
  //     "Before the update, the login-status was " + prevState.isLoggedIn
  //   );
  // }

  // componentDidUpdate() {
  //   console.log("The updated inlogstatus is " + this.state.isLoggedIn);
  // }

  handleClick() {
    this.setState((prevState) => {
      return {
        isLoggedIn: !prevState.isLoggedIn,
      };
    });
  }

  render() {
    let buttonText = this.state.isLoggedIn ? "LOG OUT" : "LOG IN";
    return (
      <div>
        <button onClick={this.handleClick}>{buttonText}</button>
        {this.state.isLoggedIn ? <h1>You are in !</h1> : <Conditional />}
      </div>
    );
  }
}

export default App;
