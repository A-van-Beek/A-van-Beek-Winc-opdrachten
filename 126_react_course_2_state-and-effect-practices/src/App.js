import React from "react";
import "./App.css";
import WindowTracker from "./WindowTracker";

export default function App() {
  /**
   * Challenge:
   * 1. Create state called `show`, default to `true`
   * 2. When the button is clicked, toggle `show`
   * 3. Only display `<WindowTracker>` if `show` is `true`
   */

  const [isShown, setIsShown] = React.useState(true);
  function toggleShown() {
    setIsShown((prevShown) => !prevShown);
    // console.log(isShown);
  }

  return (
    <div className="container">
      <button onClick={toggleShown}>Toggle WindowTracker</button>
      {isShown === true && <WindowTracker />}
    </div>
  );
}
