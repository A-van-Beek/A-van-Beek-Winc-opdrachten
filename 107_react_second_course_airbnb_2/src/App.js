import React from "react";
import "./App.css";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data.js";

function App() {
  const cardElements = data.map((x) => {
    return (
      <Card
        img={x.coverImg}
        rating={x.stats.rating}
        reviewCount={x.stats.reviewCount}
        location={x.location}
        title={x.title}
        price={x.price}
      />
    );
  });
  return <div>{cardElements}</div>;
}

export default App;

// <Navbar />
// {/* <Hero /> */}
