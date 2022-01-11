import React from "react";
import boxes from "./components/boxes";
import Box from "./components/Box";
import "./style.css";

function App() {
  const [squares, setSquares] = React.useState(boxes);

  //   /*
  //  methode_1
  //   Deze methode is nogal omslachtig en niet zo heel erg expliciet (declarative).
  //   werkt prima, maar .....
  //   */
  // function toggle(id) {
  //   setSquares((prevSquares) => {
  //     const newSquares = [];
  //     for (let i = 0; i < prevSquares.length; i++) {
  //       const currentSquare = prevSquares[i];
  //       if (currentSquare.id === id) {
  //         const updatedSquare = {
  //           ...currentSquare,
  //           on: !currentSquare.on,
  //         };
  //         newSquares.push(updatedSquare);
  //       } else {
  //         newSquares.push(currentSquare);
  //       }
  //     }
  //     return newSquares;
  //   });
  // }

  // methode_2
  // na de map-unctie wordt er gekeken of de id gelijk is aan de geklikte id
  // indien ja: neem alle items uit object over, en switch square.on.
  // zo nee: neem alle items uit object over
  // return het nieuwe array
  function toggle(id) {
    setSquares((prevSquares) => {
      return prevSquares.map((square) => {
        return square.id === id ? { ...square, on: !square.on } : square;
      });
    });
  }

  const squareElements = squares.map((square) => (
    <Box
      key={square.id}
      id={square.id}
      on={square.on}
      toggle={() => toggle(square.id)}
    />
  ));

  return (
    <main>
      <h1>titel</h1>
      {squareElements}
    </main>
  );
}

export default App;
