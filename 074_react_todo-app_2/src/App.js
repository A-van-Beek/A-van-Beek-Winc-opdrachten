import React from "react";

import MyHeader from "./components/MyHeader";
import MyMainContent from "./components/MyMainContent";
import MyFooter from "./components/MyFooter";
import MyText from "./components/MyText";

function App() {
  return (
    <div>
      <MyHeader />
      <MyMainContent />
      <MyText />
      <MyFooter />
    </div>
  );
}

export default App;
