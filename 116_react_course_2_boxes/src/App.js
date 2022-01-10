import React from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <section>
      <Header />
      <Main darkMode={true} />
    </section>
  );
}

export default App;
