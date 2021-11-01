// Side effects?
// Network request
// Manual DOM manipulation
// Event listeners or timeouts and intervals

import React, { useState, useEffect } from "react";
import randomcolor from "randomcolor";

function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("");
  const [teller, setTeller] = useState(0);

  function increment() {
    setCount((prevCount) => prevCount + 1);
  }

  function decrement() {
    setCount((prevCount) => prevCount - 1);
  }

  useEffect(() => {
    setColor(randomcolor());
  }, [count]);
  /**
   * useEffect heeft twee parameters,
   * de eerste is een call-back function
   * ______()setcolor to randomcolor
   * daarna kan je een array invoeren van de variabelen
   * waarnaar gekeken moet worden om het effect te triggeren
   * Doe je dat niet dan krijg een een oneindige loop
   * laat je het array leeg, dan wordt hij alleen getriggerd
   * bij de eerste run (en niet bij wijzigen)
   */

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTeller((prevTeller) => prevTeller + 1);
      /**
       * dit is een teller die oneindig doorgaat,
       * via de return kan je een functie schrijven die
       * deze weer opruimt
       */
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <h1 style={{ color: color }}>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <br />
      <br />
      <h1>{teller}</h1>
    </div>
  );
}

export default App;
