import React from "react";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { CiHeart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import Nav from "./Nav";
import Logo from "./Pages/Logo";

const Header = () => {
  return (
    <header className="border-b p-3 pt-5 pb-5 bg-white">
      <div className=" mx-auto flex justify-between items-center">
        <Link to="/">
          {/* <span className="font-bold">Furnio</span> */}
          <Logo />
        </Link>
        <Nav />
        <div className="flex right-3 gap-6">
          {/* <Cart /> */}
          <Link to="/cart">
            <FaCartPlus className="font-bold size-5 text-stone-900" />
          </Link>
          <Link to="/profile">
            {" "}
            <CgProfile className="font-bold size-5 text-stone-900" />
          </Link>
          <Link to="/like">
            {" "}
            <CiHeart className="font-bold size-5 text-stone-900" />
          </Link>
          <Link to="/search">
            {" "}
            <CiSearch className="font-bold size-5 text-stone-900" />
          </Link>

          <div className="block md:hidden">
            <Navigation />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
