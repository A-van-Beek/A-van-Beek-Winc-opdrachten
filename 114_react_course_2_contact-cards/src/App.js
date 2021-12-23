import "./App.css";
import React from "react";
import Star from "./Star";

function App() {
  const [contact, setContact] = React.useState({
    firstName: "Piet",
    lastName: "Hein",
    phone: "+1 (719) 333-1212",
    email: "itsNOTmyrealname@example.com",
    isFavorite: false,
  });

  function toggleFavorite() {
    setContact((prevContact) => {
      return {
        ...prevContact,
        isFavorite: !prevContact.isFavorite,
      };
    });
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
          <Star isFilled={contact.isFavorite} handleClick={toggleFavorite} />
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
