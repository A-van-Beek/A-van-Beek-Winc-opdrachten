import React from "react";
import { Outlet, Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav>
        <Link to="/">home</Link> | <Link to="/chartView">grafieken</Link> |{" "}
        <Link to="/chartExample">grafisch overzicht</Link> |{" "}
        <Link to="/studentView">studenten overzicht</Link>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
