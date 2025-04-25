import React from "react";
import { useLocation, Link } from "react-router-dom";

import tableBar from "./../../Asset/solfd.png";
import sofaBar from "./../../Asset/sodp.png";
import washBase from "./../../Asset/wasd.png";
import bigSofa from "./../../Asset/sospa.png";
import palorSofa from "./../../Asset/sopls.png";
import latternLap from "./../../Asset/lap.png";
import brownSofa from "./../../Asset/sof.png";
import roomSofa from "./../../Asset/solf.png";

const products = [
  {
    img: tableBar,
    name: "Syltherine",
    desc: "Stylish cafe chair",
    price: "Rp 2.500.000",
    oldPrice: "Rp 3.500.000",
    tag: "-30",
    tagColor: "bg-red-500",
  },
  {
    img: sofaBar,
    name: "Leviosa",
    desc: "Stylish cafe chair",
    price: "Rp 2.500.000",
    special: true,
  },
  {
    img: washBase,
    name: "Lolito",
    desc: "Luxury big sofa",
    price: "Rp 7.000.000",
    oldPrice: "Rp 14.000.000",
    tag: "-50",
    tagColor: "bg-red-500",
  },
  {
    img: roomSofa,
    name: "Respira",
    desc: "Outdoor bar table and stool",
    price: "Rp 2.500.000",
    oldPrice: "Rp 3.500.000",
    tag: "New",
    tagColor: "bg-green-500",
  },
  {
    img: bigSofa,
    name: "Grifo",
    desc: "Night Lamp",
    price: "Rp 1.500.000",
  },
  {
    img: palorSofa,
    name: "Muggo",
    desc: "Small mug",
    price: "Rp 150.000",
    tag: "New",
    tagColor: "bg-green-500",
  },
  {
    img: latternLap,
    name: "Pinky",
    desc: "Cute bed set",
    price: "Rp 7.000.000",
    oldPrice: "Rp 14.000.000",
    tag: "-50",
    tagColor: "bg-red-500",
  },
  {
    img: brownSofa,
    name: "Potty",
    desc: "Minimalist flower pot",
    price: "Rp 2.500.000",
    tag: "New",
    tagColor: "bg-green-500",
  },
];

const OurProduct = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isProductDetails = location.pathname === "/product-details";
  const isShop = location.pathname === "/shop";

  return (
    <div>
      <section className="our-product">
        {/* Section Titles */}
        {isHome && (
          <div className="text-center mt-5 font-extrabold text-2xl p-5">
            <span>Our Product</span>
          </div>
        )}

        {isProductDetails && (
          <section className="Product text-center font-extrabold pt-10 p-10 text-2xl">
            <h1>Related Products</h1>
          </section>
        )}

        {/* Product List */}
        <section className="flex justify-evenly flex-wrap gap-x-1 gap-y-3 p-4">
          {products.map((product, idx) => (
            <div
              key={idx}
              className={`relative bg-gray-50 rounded-lg p-2 w-[260px]`}
            >
              <div className="relative">
                <img
                  src={product.img}
                  alt={product.name}
                  className="rounded-lg"
                />

                {product.tag && (
                  <span
                    className={`absolute right-3 top-4 ${product.tagColor} text-white rounded-full flex items-center justify-center w-10 h-10 text-xs`}
                  >
                    {product.tag}
                  </span>
                )}

                {product.special && (
                  <div className="absolute top-20 left-1/2 transform -translate-x-1/2 text-center">
                    <div className="bg-black bg-opacity-50 p-2 rounded text-white font-bold mb-2">
                      <button>Add to cart</button>
                    </div>
                    <div className="flex justify-center gap-2 text-white text-xs">
                      <p>Share</p>
                      <p>Compare</p>
                      <p>Like</p>
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-3">
                <p className="font-bold">{product.name}</p>
                <p className="text-sm">{product.desc}</p>
                <div className="flex gap-2 mt-1">
                  <p className="font-bold">{product.price}</p>
                  {product.oldPrice && (
                    <p className="text-sm line-through text-gray-500">
                      {product.oldPrice}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </section>
      </section>

      {/* Show More Button */}
      {!isShop && (
        <section className="flex justify-center items-center mt-5 mb-10">
          <Link to="/shop">
            <button className="show-room font-bold border-2 border-black pt-2 p-2 w-40 rounded">
              Show More
            </button>
          </Link>
        </section>
      )}
    </div>
  );
};

export default OurProduct;
