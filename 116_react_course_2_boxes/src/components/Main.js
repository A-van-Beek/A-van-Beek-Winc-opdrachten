import React from "react";
import boxes from "./boxes";

function Main(props) {
  console.log(props.darkMode);
  const styles = {
    backgroundColor: props.darkMode === true ? "#b0c2cf" : "#2e3133",
  };

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
    <main className="main" style={styles}>
      <h1>Boxes will go here</h1>
      {boxElements}
    </main>
  );
}

export default Main;
