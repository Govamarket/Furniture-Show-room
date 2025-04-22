import React, { useState } from "react";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { CiHeart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import Nav from "./Nav";
import Logo from "../Pages/Logo";
import { X } from "lucide-react";
import ProductComparison from "../Products/ProductCompare";

const Header = () => {
  const [openCart, setOpenCart] = useState(false);
  const cartItems = [
    {
      id: 1,
      name: "Asgaard sofa",
      image: "/images/asgaard.jpg",
      price: 250000,
      quantity: 1,
    },
    {
      id: 2,
      name: "Casaliving Wood",
      image: "/images/casaliving.jpg",
      price: 270000,
      quantity: 1,
    },
  ];

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleOpenCart = () => {
    setOpenCart(!openCart);
  };

  return (
    <header className="border-b p-3 pt-5 pb-5 bg-white relative">
      <div className=" mx-auto flex justify-between items-center">
        <Link to="/">
          {/* <span className="font-bold">Furnio</span> */}
          <Logo />
        </Link>
        <Nav />
        <div className="flex right-3 gap-6">
          {/* <Cart /> */}
          <p onClick={handleOpenCart}>
            <FaCartPlus className="font-bold size-5 text-stone-900" />
          </p>
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

      {openCart === true && (
        <div className="fixed items-start flex justify-end top-0 w-full z-10 h-screen bg-[#00000030]">
          <div className="w-full max-w-md bg-[#fff] p-6 shadow-xl rounded-md">
            <h2 className="text-xl font-semibold mb-4">Shopping Cart</h2>

            <X size={20} onClick={handleOpenCart} />
            <div className="divide-y">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between py-4"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div>
                      <h4 className="font-semibold">{item.name}</h4>
                      <p className="text-sm">
                        {item.quantity} x{" "}
                        <span className="text-yellow-600 font-semibold">
                          Rs. {item.price.toLocaleString()}
                        </span>
                      </p>
                    </div>
                  </div>
                  <button className="text-gray-500 hover:text-red-500">
                    <X size={20} />
                  </button>
                </div>
              ))}
            </div>
            <div className="mt-6 flex justify-between items-center text-lg font-semibold">
              <span>Subtotal</span>
              <span className="text-yellow-600">
                Rs. {subtotal.toLocaleString()}
              </span>
            </div>
            <div className="mt-6 flex gap-2">
              <button variant="outline" className="w-full border">
                Cart
              </button>
              <button className="w-full border">Checkout</button>
              <Link to="/product-comparison">
                <button variant="outline" className="w-full border">
                  Comparison
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
