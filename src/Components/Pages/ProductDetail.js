import React from "react";
import { Star, Facebook, Linkedin, Instagram } from "lucide-react";
import Center from "./../../Asset/center.png";
import inline from "./../../Asset/inline.png";
import inlinef from "./../../Asset/inlinef.png";
import inlineT from "../../Asset/inliner.png";

const ProductDetail = () => {
  return (
    <div className="bg-[#fcf8ef] min-h-screen p-8">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-600 mb-6">
        Home &gt; Shop &gt; <span className="font-semibold">Asgaard sofa</span>
      </div>

      {/* Main section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white p-6 rounded-lg border">
        {/* Image section */}
        <div className="flex gap-4">
          <div className="flex flex-col gap-4">
            {[1, 2, 3, 4].map((img, idx) => (
              <div key={idx} className="w-20 h-20 bg-[#f3ede5] rounded-lg" />
            ))}
          </div>
          <div className="flex-1 bg-[#f3ede5] rounded-lg h-[400px]" />
        </div>

        {/* Info section */}
        <div>
          <h2 className="text-2xl font-bold">Asgaard sofa</h2>
          <p className="text-xl text-gray-500 mt-2">Rs. 250,000.00</p>

          {/* Reviews */}
          <div className="flex items-center gap-1 mt-2 text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} fill="currentColor" />
            ))}
            <p className="text-xs text-gray-500 ml-2">6 Customer Review</p>
          </div>

          {/* Product Description */}
          <p className="text-sm text-gray-600 mt-4">
            Setting the bar as one of the touted speakers in its class, the
            Klipsch is a compact, dual-hybrid hero...
          </p>

          {/* Sizes */}
          <div className="mt-4">
            <p className="font-semibold">Size</p>
            <div className="flex gap-2 mt-2">
              {["XL", "L", "XS"].map((size) => (
                <span
                  key={size}
                  className="border px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-gray-100"
                >
                  {size}
                </span>
              ))}
            </div>
          </div>

          {/* Colors */}
          <div className="mt-4">
            <p className="font-semibold">Color</p>
            <div className="flex gap-3 mt-2">
              {["bg-black", "bg-purple-600", "bg-yellow-700"].map(
                (color, i) => (
                  <span
                    key={i}
                    className={`w-6 h-6 rounded-full cursor-pointer border ${color}`}
                  />
                )
              )}
            </div>
          </div>

          {/* Add to Cart */}
          <div className="flex items-center gap-4 mt-6">
            <input
              type="number"
              defaultValue={1}
              className="w-14 text-center border p-1 rounded"
            />
            <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800">
              Add To Cart
            </button>
            <button className="border px-4 py-2 rounded hover:bg-gray-100">
              + Compare
            </button>
          </div>

          {/* Meta info */}
          <div className="text-sm text-gray-600 mt-6">
            <p>
              SKU: <span className="text-black">SS001</span>
            </p>
            <p>
              Category: <span className="text-black">Sofas</span>
            </p>
            <p>
              Tags: <span className="text-black">Sofa, Chair, Home, Shop</span>
            </p>
          </div>

          {/* Social Share */}
          <div className="flex gap-3 mt-4">
            <Facebook className="w-5 h-5 cursor-pointer" />
            <Linkedin className="w-5 h-5 cursor-pointer" />
            <Instagram className="w-5 h-5 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
