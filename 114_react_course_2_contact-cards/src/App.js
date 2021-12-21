import "./App.css";
import React from "react";

function App() {
  const [contact, setContact] = React.useState({
    firstName: "Piet",
    lastName: "Hein",
    phone: "+1 (719) 333-1212",
    email: "itsNOTmyrealname@example.com",
    isFavorite: true,
  });

  let starIcon =
    contact.isFavorite === true ? "star-empty.png" : "star-filled.png";
  console.log(starIcon);

  function toggleFavorite() {
    console.log("Toggle Favorite");
  }

  return (
    <main>
      <article className="card">
        <img
          src="./images/user.png"
          alt="oeps-portret"
          className="card--image"
        />
        <div className="card--info">
          <img
            src={`../images/${starIcon}`}
            alt="oeps-star"
            className="card--favorite"
            onClick={toggleFavorite}
          />
          <h2 className="card--name">
            {contact.firstName} {contact.lastName}
          </h2>
          <p className="card--contact">{contact.phone}</p>
          <p className="card--contact">{contact.email}</p>
        </div>
      </article>
    </main>
  );
}

export default App;
