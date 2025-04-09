import React from "react";
import Shop from "./Pages/Shop";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import About from "./Pages/About";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className=" content hidden md:block">
      <nav className=" flex justify-between gap-10">
        <Link to="/home">
          {" "}
          <Home />
        </Link>
        <Link to="/shop">
          <Shop />
        </Link>
        <Link to="/about">
          {" "}
          <About />
        </Link>

        <Link to="/contact">
          <Contact />
        </Link>
      </nav>
    </div>
  );
};

export default Nav;
