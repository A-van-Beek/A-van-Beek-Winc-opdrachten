import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [answer, setAnswer] = useState("Yes");

  function increment() {
    setCount((prevCount) => prevCount + 1);
  }

  function decrement() {
    setCount((prevCount) => prevCount - 1);
  }

  function toggleAnswer() {
    setAnswer((prevAnswer) => prevAnswer + "Yes");
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Increment!</button>
      <button onClick={decrement}>Decrement!</button>
      <br />
      <br />
      <h1>Is it working?</h1>
      <button onClick={toggleAnswer}>toggle answer</button>
      <br />
      <br />
      <br />
      <div>{answer}</div>
    </div>
  );
}

export default App;
