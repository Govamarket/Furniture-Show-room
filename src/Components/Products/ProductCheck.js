import React from "react";
import ProductImg from "./../../Asset/productc.png";
import logoManu from "./../../Asset/MeuLogos.png";
import InfoBanner from "../Pages/InfoBanner";

const ProductCheck = () => {
  const total = 250000;
  return (
    <div>
      <div className="w-full">
        {/* Header Banner */}
        <div
          className="relative w-full h-64 bg-cover bg-center"
          style={{
            backgroundImage: `url(${ProductImg})`,
          }}
        >
          <div className="absolute inset-0 bg-white bg-opacity-70 flex flex-col justify-center items-center text-center p-4">
            {/* Logo */}
            <div className="mb-2">
              <img src={logoManu} alt="Logo" className="h-12 md:h-16" />
            </div>

            {/* Title */}
            <h1 className="text-2xl md:text-3xl font-semibold text-black">
              Checkout
            </h1>

            {/* Breadcrumb */}
            <div className="mt-2 text-sm text-gray-700">
              <span className="font-semibold">Home</span>
              <span className="mx-1">›</span>
              <span>Check</span>
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-screen bg-white p-4 sm:p-8">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
          {/* Billing Details */}
          <div className="w-full lg:w-2/3">
            <h2 className="text-xl font-semibold mb-6">Billing details</h2>
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm md:grid-cols-2">
              <input placeholder="First name" className="p-3 border rounded" />{" "}
              <input placeholder="Last name" className="p-3 border rounded" />
              <input
                placeholder="Company name (optional)"
                className="p-3 border rounded col-span-2"
              />
              <select className="p-3 border rounded col-span-2 sm:col-span-1">
                <option>Country / Region</option>
                <option>Nigeria</option>
                <option>Ghana</option>
                <option>Niger</option>
              </select>
              <input
                placeholder="Street address"
                className="p-3 border rounded col-span-2"
              />
              <input
                placeholder="Town / City"
                className="p-3 border rounded col-span-2 sm:col-span-1"
              />
              <input
                placeholder="Province"
                className="p-3 border rounded col-span-2 sm:col-span-1"
              />
              <input
                placeholder="ZIP Code"
                className="p-3 border rounded col-span-2 sm:col-span-1"
              />
              <input
                placeholder="Phone"
                className="p-3 border rounded col-span-2 sm:col-span-1"
              />
              <input
                placeholder="Email address"
                className="p-3 border rounded col-span-2"
              />
              <textarea
                placeholder="Additional information"
                rows={3}
                className="p-3 border rounded col-span-2"
              />
            </form>
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-1/3 bg-[#f9f9f9] p-6 rounded-md shadow">
            <h2 className="text-xl font-semibold mb-4">Product</h2>
            <div className="flex justify-between text-sm mb-2 text-gray-700">
              <span>Agggard Sofa × 1</span>
              <span>₦. {total.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-sm mb-2 text-gray-700">
              <span>Subtotal</span>
              <span>₦. {total.toLocaleString()}</span>
            </div>
            <div className="flex justify-between font-semibold text-lg text-yellow-700 border-t border-gray-300 pt-4 mt-4">
              <span>Total</span>
              <span>₦. {total.toLocaleString()}</span>
            </div>

            {/* Payment Options */}
            <div className="mt-6">
              <label className="flex items-start gap-2 mb-4 text-sm">
                <input
                  type="radio"
                  name="payment"
                  defaultChecked
                  className="mt-1"
                />
                <span>
                  <strong>Direct bank transfer</strong>
                  <br />
                  Make your payment directly into our bank account. Please use
                  your Order ID as the payment reference. Your order won’t be
                  shipped until the funds have cleared in our account.
                </span>
              </label>
              <label className="flex items-start gap-2 text-sm mb-6">
                <input type="radio" name="payment" className="mt-1" />
                <span>Cash on delivery</span>
              </label>
            </div>

            <button className="w-full bg-black  text-white py-2 rounded hover:bg-gray-900 transition-all">
              Place order
            </button>
          </div>
        </div>
      </div>
      <section>
        <InfoBanner />
      </section>
    </div>
  );
};

export default ProductCheck;
