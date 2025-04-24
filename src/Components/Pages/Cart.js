import React from "react";
import productImg from "./../../Asset/productc.png";
import { Trash2 } from "lucide-react";
import InfoBanner from "./InfoBanner";

const Cart = () => {
  const price = 250000;

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between gap-6 p-4 sm:p-6 bg-white min-h-screen">
        {/* Cart Table */}
        <div className="w-full md:w-2/3 overflow-x-auto">
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
              <tr className="border-t text-sm sm:text-base">
                {/* Product */}
                <td className="flex items-center gap-4 py-4 px-4">
                  <img
                    src={productImg}
                    alt="product"
                    className="w-16 h-16 object-cover rounded"
                  />
                  <span>Agggard Sofa</span>
                </td>

                {/* Price */}
                <td className="py-4 px-4 text-gray-600">
                  Rs. {price.toLocaleString()}
                </td>

                {/* Quantity */}
                <td className="py-4 px-4">
                  <input
                    type="number"
                    defaultValue={1}
                    className="w-14 px-2 py-1 border rounded text-center"
                  />
                </td>

                {/* Subtotal */}
                <td className="py-4 px-4 text-gray-800 font-medium">
                  Rs. {price.toLocaleString()}
                </td>

                {/* Delete Icon */}
                <td className="py-4 px-4 text-red-500 cursor-pointer">
                  <Trash2 size={18} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Cart Totals */}
        <div className="w-full md:w-1/3 bg-[#fdf6ef] p-6 rounded-md shadow-sm h-auto">
          <h2 className="text-lg font-semibold mb-4">Cart Totals</h2>
          <div className="flex justify-between mb-2 text-gray-700">
            <span>Subtotal</span>
            <span>Rs. {price.toLocaleString()}</span>
          </div>
          <div className="flex justify-between font-semibold text-lg text-[#c49a6c] mb-4">
            <span>Total</span>
            <span>Rs. {price.toLocaleString()}</span>
          </div>
          <button className="w-full bg-transparent border border-black text-black py-2 rounded hover:bg-black hover:text-white transition-all duration-300">
            Check Out
          </button>
        </div>
      </div>

      {/* Info Banner */}
      <section>
        <InfoBanner />
      </section>
    </div>
  );
};

export default Cart;
