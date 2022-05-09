import React from "react";
import { Outlet, Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav>
        <Link to="/">home</Link> | <Link to="/chartView">grafieken</Link> |{" "}
        <Link to="/studentView">studenten overzicht</Link> |{" "}
        {/* <Link to="/studentOne">student solo</Link> */}
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
