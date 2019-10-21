import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar navbar-expand-lg navbar-light bg-dark justify-content-center">
      <Link className="btn btn-outline-info" to="/">
        Menu
      </Link>
      <Link className="btn btn-outline-info" to="/burger">
        Burger
      </Link>
      <Link className="btn btn-outline-info" to="/order">
        Order
      </Link>
    </div>
  );
};

export default NavBar;
