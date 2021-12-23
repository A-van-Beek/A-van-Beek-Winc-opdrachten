import React from "react";
import Header from "./Header";
import Body from "./Body";
import "./App.css";

export default function App() {
  const [user, setUser] = React.useState("Jane");

  return (
    <main>
      <Header user={user} />
      <Body user={user} />
    </main>
  );
}
