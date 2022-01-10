import React from "react";
import boxes from "./boxes";

function Box() {
  const [boxArray, setBoxArray] = React.useState(boxes);

  const boxElements = boxArray.map((box) => {
    const boxClass = box.on === true ? "box--item-on" : "box--item-off";
    return (
      <p className={boxClass} key={box.id}>
        {box.on}
      </p>
    );
  });

  return <div>{boxElements}</div>;
}

export default Box;
