import React from "react";
import boxes from "./components/boxes";
import Box from "./components/Box";
import "./style.css";

function App() {
  const [squares, setSquares] = React.useState(boxes);

  const squareElements = squares.map((square) => (
    <Box key={square.id} on={square.on} />
  ));

  return (
    <main>
      <h1>titel</h1>
      {squareElements}
    </main>
  );
}

export default App;
