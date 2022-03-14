import React from "react";
import store from "../store";
import "./Clients.css";

const clientData = store.getState().clientReducer;

/**
 * sortering cliënten, alfabetich achternaam - voornaam
 */
clientData.sort((a, b) => {
  if (a.last_name < b.last_name) {
    return -1;
  }
  if (a.last_name > b.last_name) {
    return 1;
  }
  if (a.first_name < b.first_name) {
    return -1;
  }
  if (a.first_name > b.first_name) {
    return 1;
  }
  return 0;
});

const clientItems = clientData.map((item) => (
  <li key={item.id}>
    {item.first_name} {item.last_name}
    {"........."}
    <button className="delete-btn">
      <i className="gg-trash trash-icon"></i>
    </button>
    {"........."}
  </li>
));

export default function Clients() {
  return <div>{clientItems}</div>;
}
