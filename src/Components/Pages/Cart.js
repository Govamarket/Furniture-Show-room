import React from "react";
import { Trash2 } from "lucide-react";
import InfoBanner from "./InfoBanner";
import { useCart } from "./UseCart"; // adjust path based on your folder structure

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, totalPrice } = useCart();

  // Handle quantity change
  const handleQuantityChange = (productId, event) => {
    const newQuantity = parseInt(event.target.value, 10);
    if (!isNaN(newQuantity) && newQuantity > 0) {
      updateQuantity(productId, newQuantity);
    }
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between gap-6 p-4 sm:p-6 bg-white min-h-screen">
        {/* Cart Table */}
        <div className="place-items-center w-full md:w-2/3 overflow-x-auto">
          {cartItems.length === 0 ? (
            <div className=" text-center py-10">
              <h2 className="text-xl font-medium mb-4">Your cart is empty</h2>
              <p className="text-gray-600 mb-4">
                Looks like you haven't added anything to your cart yet.
              </p>
              <a
                href="/shop"
                className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
              >
                Continue Shopping
              </a>
            </div>
          ) : (
            <table className="w-full border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-[#fdf6ef] text-left text-gray-700 text-sm sm:text-base">
                  <th className="py-3 px-4">Product</th>
                  <th className="py-3 px-4">Price</th>
                  <th className="py-3 px-4">Quantity</th>
                  <th className="py-3 px-4">Subtotal</th>
                  <th className="py-3 px-4"></th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => {
                  // Calculate subtotal for this item
                  const priceValue = parseFloat(
                    item.price.replace(/[^0-9.-]+/g, "")
                  );
                  const subtotal = priceValue * item.quantity;

                  // Determine currency symbol from price
                  const currencySymbol = item.price
                    .replace(/[0-9.-]+/g, "")
                    .trim();

                  return (
                    <tr key={item.id} className="border-t text-sm sm:text-base">
                      {/* Product */}
                      <td className="flex items-center gap-4 py-4 px-4">
                        <img
                          src={item.img}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded"
                        />
                        <span>{item.name}</span>
                      </td>

                      {/* Price */}
                      <td className="py-4 px-4 text-gray-600">{item.price}</td>

                      {/* Quantity */}
                      <td className="py-4 px-4">
                        <input
                          type="number"
                          value={item.quantity}
                          min="1"
                          onChange={(e) => handleQuantityChange(item.id, e)}
                          className="w-14 px-2 py-1 border rounded text-center"
                        />
                      </td>

                      {/* Subtotal */}
                      <td className="py-4 px-4 text-gray-800 font-medium">
                        {currencySymbol}
                        {subtotal.toLocaleString(undefined, {
                          minimumFractionDigits: 0,
                          maximumFractionDigits: 2,
                        })}
                      </td>

                      {/* Delete Icon */}
                      <td className="py-4 px-4 text-red-500 cursor-pointer">
                        <Trash2
                          size={18}
                          onClick={() => removeFromCart(item.id)}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>

        {/* Cart Totals */}
        {cartItems.length > 0 && (
          <div className="w-full md:w-1/3 bg-[#fdf6ef] p-6 rounded-md shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Cart Totals</h2>
            <div className="flex justify-between mb-2 text-gray-700">
              <span>Subtotal</span>
              <span>
                {totalPrice > 0
                  ? // Use the currency symbol from the first item (or default to $)
                    `${
                      cartItems.length > 0
                        ? cartItems[0].price.replace(/[0-9.-]+/g, "").trim()
                        : "$"
                    } ${totalPrice.toLocaleString(undefined, {
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 2,
                    })}`
                  : "0"}
              </span>
            </div>
            <div className="flex justify-between font-semibold text-lg text-[#c49a6c] mb-4">
              <span>Total</span>
              <span>
                {totalPrice > 0
                  ? `${
                      cartItems.length > 0
                        ? cartItems[0].price.replace(/[0-9.-]+/g, "").trim()
                        : "$"
                    } ${totalPrice.toLocaleString(undefined, {
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 2,
                    })}`
                  : "0"}
              </span>
            </div>
            <button className="w-full bg-transparent border border-black text-black py-2 rounded hover:bg-black hover:text-white transition-all duration-300">
              Check Out
            </button>
          </div>
        )}
      </div>

      {/* Info Banner */}
      <section>
        <InfoBanner />
      </section>
    </div>
  );
};

export default Cart;
