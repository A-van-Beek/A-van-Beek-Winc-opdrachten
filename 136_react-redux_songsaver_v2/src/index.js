import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import { render } from "@testing-library/react";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="about" element={<About />} />
      <Route path="blogs" element={<Blogs />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
