import React from "react";
// import ReactDOM from "react-dom";
import App from "./components/App/App";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentView from "./components/StudentView/StudentView";
import ChartView from "./components/Charts/ChartView";
import StudentOne from "./components/Student/StudentOne";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="ChartView" element={<ChartView />} />
      <Route path="StudentView" element={<StudentView />} />
      <Route path="StudentOne/:id" element={<StudentOne />} />
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
