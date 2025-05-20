// The main issue is that your cart state management isn't properly connected between components.
// Here's how to fix your Header.jsx file to use the shared cart state:

import { useState } from "react";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { CiHeart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import Nav from "./Nav";
import Logo from "../Pages/Logo";
import { X } from "lucide-react";
import { useCart } from "../Pages/UseCart";

const Header = () => {
  const [openCart, setOpenCart] = useState(false);
  // Get cart items and methods from the useCart hook
  const { cartItems, removeFromCart, totalPrice } = useCart();

  const handleOpenCart = () => {
    setOpenCart(!openCart);
  };

  // Calculate total number of items for the cart badge
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <header className="border-b p-3 pt-5 pb-5 bg-white relative">
      <div className=" mx-auto flex justify-between items-center">
        <Link to="/">
          <Logo />
        </Link>
        <Nav />
        <div className="flex right-3 gap-6">
          <Link to="/contact">
            <CgProfile className="font-bold size-5 text-stone-900" />
          </Link>
          <Link to="/search">
            <CiSearch className="font-bold size-5 text-stone-900" />
          </Link>
          <Link to="/like">
            <CiHeart className="font-bold size-5 text-stone-900" />
          </Link>
          <div className="relative">
            <p onClick={handleOpenCart}>
              <FaCartPlus className="font-bold size-5 text-stone-900 cursor-pointer" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center cursor-pointer">
                  {totalItems > 99 ? "99+" : totalItems}
                </span>
              )}
            </p>
          </div>

          <div className="block md:hidden">
            <Navigation />
          </div>
        </div>
      </div>

      {/* Cart Modal */}
      {openCart === true && (
        <div className="fixed items-start flex justify-end top-0 w-full z-10 h-screen bg-[#00000030]">
          <div className="w-full max-w-md bg-[#fff] p-6 shadow-xl rounded-md">
            <h2 className="text-xl font-semibold mb-4">Shopping Cart</h2>

            <X
              size={20}
              onClick={handleOpenCart}
              className="absolute right-10 top-7"
            />
            <div className="divide-y">
              {cartItems.length === 0 ? (
                <p className="py-4 text-center text-gray-500">
                  Your cart is empty
                </p>
              ) : (
                cartItems.map((item) => {
                  // Extract currency and price value
                  const currencySymbol =
                    typeof item.price === "string"
                      ? item.price.replace(/[0-9.-]+/g, "").trim()
                      : "$";

                  const priceValue =
                    typeof item.price === "string"
                      ? parseFloat(item.price.replace(/[^0-9.-]+/g, ""))
                      : item.price;

                  return (
                    <div
                      key={item.id}
                      className="flex items-center justify-between py-4"
                    >
                      <div className="flex items-center gap-4">
                        <img
                          src={item.img}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded"
                        />
                        <div>
                          <h4 className="font-semibold">{item.name}</h4>
                          <p className="text-sm">
                            {item.quantity} x{" "}
                            <span className="text-yellow-600 font-semibold">
                              {currencySymbol} {priceValue.toLocaleString()}
                            </span>
                          </p>
                        </div>
                      </div>
                      <button
                        className="text-gray-500 hover:text-red-500"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <X size={20} />
                      </button>
                    </div>
                  );
                })
              )}
            </div>

            <div className="mt-6 flex justify-between items-center text-lg font-semibold">
              <span>Subtotal</span>
              <span className="text-yellow-600">
                {cartItems.length > 0
                  ? `${
                      cartItems[0].price.replace(/[0-9.-]+/g, "").trim() || "$"
                    } ${totalPrice.toLocaleString(undefined, {
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 2,
                    })}`
                  : "$0"}
              </span>
            </div>
            <div className="mt-6 flex justify-evenly gap-2">
              <Link to="/cart">
                <button variant="outline" className="w-full p-2 border">
                  Cart
                </button>
              </Link>
              <Link to="/product-check">
                <button className="w-full border p-2">Checkout</button>
              </Link>
              <Link to="/product-comparison">
                <button variant="outline" className="w-full border p-2">
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
