import React from "react";

export default function Box(props) {
  const [on, setOn] = React.useState(props.on);
  /**
op deze manier maak je een useState voor elke individuele box
kan in een aantal specifieke gevallen de juiste werkwijze zijn,
maar meestal is de volgende methode beter.
   */
  const styles = {
    backgroundColor: on ? "#222222" : "transparent",
  };

  function toggle() {
    setOn((prevOn) => !prevOn);
  }

  return <div style={styles} className="box" onClick={toggle}></div>;
}
