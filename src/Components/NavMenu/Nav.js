import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className=" hidden md:block">
      <nav className=" flex justify-between gap-x-10">
        <Link to="/"> Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/about"> About</Link>

        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  );
};

export default Nav;
