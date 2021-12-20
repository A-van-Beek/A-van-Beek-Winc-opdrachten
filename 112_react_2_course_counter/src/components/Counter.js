import React from "react";

function Counter() {
  const [count, setCount] = React.useState(0);

  function add() {
    setCount(count + 1);
  }

  function minus() {
    setCount(count - 1);
  }
  return (
    <div className="counter">
      <button onClick={minus} className="counter--minus">
        –
      </button>
      <div className="counter--count">
        <h1>{count}</h1>
      </div>
      <button onClick={add} className="counter--plus">
        +
      </button>
    </div>
  );
}

export default Counter;
