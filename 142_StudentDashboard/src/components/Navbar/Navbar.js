import React from "react";
import { Outlet, Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav>
        <Link to="/">home</Link> |{" "}
        <Link to="/chartExample">chartExample view</Link> |{" "}
        <Link to="/studentView">student view</Link>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
