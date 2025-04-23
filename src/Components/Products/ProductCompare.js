import React from "react";
import ProductImg from "./../../Asset/productc.png";
import logoManu from "./../../Asset/MeuLogos.png";
import CenterSofa from "./../../Asset/center.png";
import BlackSofa from "./../../Asset/inlinef.png";
import { Star } from "lucide-react"; // Icons
import { FaStarHalfStroke } from "react-icons/fa6";

const ProductComparison = () => {
  const product = [
    {
      name: "Aggaard Sofa",
      image: CenterSofa,
      price: "Rs. 250,000.00",
      rating: 4.7,
      reviewCount: 2013,
      date: "2013/09/09",
    },
    {
      name: "Outdoor Sofa Set",
      image: BlackSofa,
      price: "Rs. 224,000.00",
      rating: 4.2,
      reviewCount: 147500,
      date: "99",
    },
  ];
  const renderStars = (rating) => {
    const Star = Math.floor(rating);
    const FaStarHalfStroke = rating % 1 >= 0.5;
  };
  return (
    <div>
      <div
        className="relative w-full h-64 bg-cover bg-center"
        styl
        e={{
          backgroundImage: `url(
        ${ProductImg}
        )`,
        }}
      >
        <div className="absolute inset-0 bg-white bg-opacity-70 flex flex-col justify-center items-center">
          {/* Logo or Icon */}
          <div className="mb-2">
            <img src={logoManu} />
          </div>

          {/* Title */}
          <h1 className="text-3xl font-semibold text-black">
            Product Comparison
          </h1>

          {/* Breadcrumb */}
          <div className="mt-2 text-sm text-gray-700">
            <span className="font-semibold">Home</span>
            <span className="mx-1">›</span>
            <span>Comparison</span>
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-6 items-center flex-wrap">
        <div className="mb-4 text-xs text-black font-bold  cursor-pointer">
          Go to Product page for more Products
          <br />
          <span className="font-semibold border-b-2">View More</span>
        </div>
        {product.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-4  shadow-md text-center w-50 gap-6"
          >
            <img
              src={product.image}
              alt={product.name}
              className="rounded-lg mb-3 w-full size-40"
            />
            <h4 className="text-lg font-semibold mb-1">{product.name}</h4>
            <p className="text-gray-800 font-semibold mb-1">{product.price}</p>
            <div className="text-yellow-500 text-sm mb-1">
              {"⭐".repeat(Math.floor(product.rating))} {product.rating}
            </div>
            <div className="text-gray-500 text-xs">
              {product.reviews} Reviews
            </div>
          </div>
        ))}

        <div className="w-full lg:w-52">
          <h4 className="text-lg font-semibold mb-2">Add A Product</h4>
          <button className="bg-yellow-700 text-white px-4 py-2 rounded-md w-full">
            Choose a Product ▼
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductComparison;
