import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav
      style={{
        borderBottom: "solid 1px",
        paddingBottom: "1rem",
      }}
    >
      <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
      <Link to="/blogs">Blogs</Link> |{" "}
    </nav>
  );
}
