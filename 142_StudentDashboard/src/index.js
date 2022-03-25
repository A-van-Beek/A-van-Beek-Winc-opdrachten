import React from "react";
// import ReactDOM from "react-dom";
import App from "./components/App/App";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChartExample from "./components/ChartExample/ChartExample";
import StudentView from "./components/StudentView/StudentView";
import Chart from "./components/Charts/Chart";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="Chart" element={<Chart />} />
      <Route path="ChartExample" element={<ChartExample />} />
      <Route path="StudentView" element={<StudentView />} />
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
