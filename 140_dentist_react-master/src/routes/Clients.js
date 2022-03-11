import React from "react";
import store from "../store";

const clientData = store.getState().clientReducer;

clientData.sort((a, b) => {
  let fa = a.first_name;
  let fb = b.first_name;
  if (fa < fb) {
    return -1;
  }
  if (fa > fb) {
    return 1;
  }
  return 0;
});

const clientItems = clientData.map((item) => (
  <li key={item.id}>{item.first_name}</li>
));

export default function Clients() {
  return <div>{clientItems}</div>;
}
