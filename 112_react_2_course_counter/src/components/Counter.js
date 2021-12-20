import React from "react";

function Counter() {
  const [count, setCount] = React.useState(0);

  function add() {
    setCount(count + 1);
  }

  /**
     * Note: if you ever need the old value of state
     * to help you determine the new value of state,
     * you should pass a callback function to your
     * state setter function instead of using
     * state directly. This callback function will
     * receive the old value of state as its parameter,
     * which you can then use to determine your new
     * value of state.

     * Note 2: even shorter:
     *     function add() {
     *         setCount(prevCount => prevCount + 1)
     *     }
     */

  function minus() {
    setCount(function (prevCount) {
      return prevCount - 1;
    });
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
