import React from "react";

function MyText() {
  const firstName = "Anke";
  const lastName = "van Beek";
  return (
    <div>
      <h1>Hello {firstName + " " + lastName} !</h1>
    </div>
  );
}

// De return-regel in deze functie is in JSX.
// Dat wil zeggen, een combinatie van Javascript en HTML.

export default MyText;
