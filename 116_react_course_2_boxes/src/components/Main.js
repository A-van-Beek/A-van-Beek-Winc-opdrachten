import React from "react";
import boxes from "./boxes";

function Body() {
  const [boxArray, setBoxArray] = React.useState(boxes);

  const boxElements = boxArray.map((box) => {
    const boxClass = box.on === true ? "box--item-on" : "box--item-off";
    return (
      <p className={boxClass} key={box.id}>
        {box.on}
      </p>
    );
  });

  return (
    <main className="main">
      <h1>Boxes will go here</h1>
      {boxElements}
    </main>
  );
}

export default Body;
