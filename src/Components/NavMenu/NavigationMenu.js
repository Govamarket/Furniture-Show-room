import React from "react";
import { Link } from "react-router-dom"; // Correct import source

const NavigationMenu = (props) => {
  return (
    <div>
      <span className="font-bold text-xl block mb-4">Menu</span>
      <ul className="space-y-2">
        <li>
          <Link
            to="/"
            className="block p-2 hover:bg-gray-100 rounded text-blue-500 border-b-2"
            onClick={props.closeMenu}
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            to="/about"
            className="block p-2 hover:bg-gray-100 rounded text-blue-500 border-b-2"
            onClick={props.closeMenu}
          >
            About
          </Link>
        </li>

        <li>
          <Link
            to="/contact"
            className="block p-2 hover:bg-gray-100 rounded text-blue-500 border-b-2"
            onClick={props.closeMenu}
          >
            Contact
          </Link>
        </li>

        <li>
          <Link
            to="/cart"
            className="block p-2 hover:bg-gray-100 rounded text-blue-500 border-b-2"
            onClick={props.closeMenu}
          >
            Cart
          </Link>
        </li>

        <li>
          <Link
            to="/shop"
            className="block p-2 hover:bg-gray-100 rounded text-blue-500 border-b-2"
            onClick={props.closeMenu}
          >
            Shop
          </Link>
        </li>

        <li>
          <Link
            to="/like"
            className="block p-2 hover:bg-gray-100 rounded text-blue-500 border-b-2"
            onClick={props.closeMenu}
          >
            Like
          </Link>
        </li>

        <li>
          <Link
            to="/profile"
            className="block p-2 hover:bg-gray-100 rounded text-blue-500 border-b-2"
            onClick={props.closeMenu}
          >
            Profile
          </Link>
        </li>

        <li>
          <Link
            to="/search"
            className="block p-2 hover:bg-gray-100 rounded text-blue-500 border-b-2"
            onClick={props.closeMenu}
          >
            Search
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavigationMenu;
