import React from "react";
import "./style.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./data";

function App() {
  const cards = data.map((item) => {
    return (
      <Card
        img={`../images/${item.image}`}
        title={item.title}
        location={item.location}
        googleMap={item.googleMap}
        description={item.description}
      />
    );
  });
  return (
    <section>
      <Navbar />
      {cards}
    </section>
  );
}

export default App;
