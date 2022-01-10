import React from "react";
import Box from "./Box";

function Main(props) {
  const styles = {
    backgroundColor: props.darkMode === true ? "#222222" : "#cccccc",
  };

  return (
    <main className="main" style={styles}>
      <h1>Boxes will go here</h1>
      <Box />
    </main>
  );
}

export default Main;
