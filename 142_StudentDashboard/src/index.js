import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChartExample from "./components/ChartExample/ChartExample";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="ChartExample" element={<ChartExample />} />
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
    </Routes>
  </BrowserRouter>,
  rootElement
);
