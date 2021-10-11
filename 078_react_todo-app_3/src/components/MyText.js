import React from "react";

function MyText() {
  const firstName = "Anke";
  const lastName = "van Beek";
  const date = new Date(2021, 6, 31, 22);
  //jaar, maand, dag, tijd
  const hours = date.getHours();
  let timeOfDay;
  const styles = {
    fontSize: 30,
    // uitzondering op "" zijn getallen.
    // in dit geval per default in px
  };

  if (hours < 12) {
    timeOfDay = "morning";
    styles.color = "#04756F";
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon";
    styles.color = "#8914A3";
  } else {
    timeOfDay = "night";
    styles.color = "#D90000";
  }

  //   Om inline style elementen te definieren:
  //   - je hebt een extra set {} nodig
  //   - het is overzichtelijker om deze styling in een const te zetten.
  //   - gebruik nu camelCase in plaats van -
  //   - gebruik extra "", zie ook hieronder

  const styleBasic = {
    color: "#FF8C00",
    backgroundColor: "#FF2D00",
    fontSize: "20px",
  };

  return (
    <div>
      <h1>Hello {firstName + " " + lastName} !</h1>
      <h2>Hello {`${firstName} ${lastName}`}!</h2>
      <h3>It is currently about {date.getHours() % 12} o'clock!</h3>
      <h1 style={styleBasic}>Good {timeOfDay}</h1>
      <h1 style={styles}>Good {timeOfDay}!</h1>
    </div>
  );
}

// De return-regel in deze functie is in JSX.
// Dat wil zeggen, een combinatie van Javascript en HTML.
// alles tussen {} wordt gezien als javascript.
// rest is JSX

export default MyText;
