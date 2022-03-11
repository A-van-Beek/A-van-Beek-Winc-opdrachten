import React from "react";
import "./App.css";

//routes//
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./routes/Home";
import Calendar from "./routes/Calendar";
import Day from "./routes/Day";
import Clients from "./routes/Clients";

import store from "./store";
// import * as actions from "./actions/actions";

import generateRandomAppointments from "./utils";

const unsubscribe = store.subscribe(() => {
  // hier werk je met de DOM elements !
  console.log("Store changed ! ", store.getState());
});

const appointments = generateRandomAppointments(70);

// console.log array met alle clienten
// console.log(store.getState().clientReducer);
unsubscribe();

const App = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/calendar">Calendar view</Link>
          </li>
          <li>
            <Link to="/day">Day view</Link>
          </li>
          <li>
            <Link to="/clients">Clients view</Link>
          </li>
        </ul>
      </nav>
      <main>
        <Switch>
          <Route path="/calendar">
            <Calendar appointments={appointments} />
          </Route>
          <Route path="/day">
            <Day appointments={appointments.filter((app) => app.day === 1)} />
          </Route>
          <Route path="/clients">
            <Clients />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </main>
    </div>
  </Router>
);
export default App;
