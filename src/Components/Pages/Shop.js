import React from "react";
import "./Shop.css";
import { FaFilter, FaList, FaTh } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa6";
import tableBar from "./../../Asset/solfd.png";
import sofaBar from "./../../Asset/sodp.png";
import washBase from "./../../Asset/wasd.png";
import bigSofa from "./../../Asset/sospa.png";
import palorSofa from "./../../Asset/sopls.png";
import latternLap from "./../../Asset/lap.png";
import brownSofa from "./../../Asset/sof.png";
import roomSofa from "./../../Asset/solf.png";
import OurProduct from "./OurProduct";
import ProductCard from "./productCard";

const Shop = () => {
  // Product data
  const products = [
    {
      img: tableBar,
      name: "Syltherine",
      price: "$199",
      discount: "$50",
      description: "Stylish cafe chair",
      hasDiscount: true,
    },

    {
      img: sofaBar,
      name: "Leviosa",
      price: "$199",
      discount: "$50",
      description: "Stylish cafe chair",
      newProduct: true,
    },

    {
      img: washBase,
      name: "Lolito",
      price: "$199",
      discount: "$50",
      description: "Luxury big sofa",
      hasDiscount: true,
    },

    {
      img: bigSofa,
      name: "Respira",
      price: "$199",
      discount: "$50",
      description: "Outdoor bar table and stool",
      newProduct: true,
    },

    {
      img: palorSofa,
      name: "Pinky",
      price: "$199",
      discount: "$50",
      description: "Night Lamp",
      hasDiscount: true,
    },

    {
      img: latternLap,
      name: "Syltherine",
      price: "$199",
      discount: "$50",
      description: "Stylish cafe chair",
      newProduct: true,
    },

    {
      img: brownSofa,
      name: "Muggo",
      price: "$199",
      discount: "$50",
      description: "Small mug",
      hasDiscount: true,
    },

    {
      img: roomSofa,
      name: "Potty",
      price: "$199",
      discount: "$50",
      description: "Minimalist flower pot",
    },

    {
      img: tableBar,
      name: "Syltherine",
      price: "$199",
      discount: "$50",
      description: "Stylish cafe chair",
      hasDiscount: true,
    },

    {
      img: sofaBar,
      name: "Leviosa",
      price: "$199",
      discount: "$50",
      description: "Stylish cafe chair",
    },

    {
      img: washBase,
      name: "Lolito",
      price: "$199",
      discount: "$50",
      description: "Luxury big sofa",
      hasDiscount: true,
    },

    {
      img: bigSofa,
      name: "Respira",
      price: "$199",
      discount: "$50",
      description: "Outdoor bar table and stool",
      newProduct: true,
    },

    {
      img: palorSofa,
      name: "Pinky",
      price: "$199",
      discount: "$50",
      description: "Night Lamp",
      hasDiscount: true,
    },

    {
      img: latternLap,
      name: "Syltherine",
      price: "$199",
      discount: "$50",
      description: "Stylish cafe chair",
    },

    {
      img: brownSofa,
      name: "Muggo",
      price: "$199",
      discount: "$50",
      description: "Small mug",
      hasDiscount: true,
      newProduct: true,
    },

    {
      img: roomSofa,
      name: "Potty",
      price: "$199",
      discount: "$50",
      description: "Minimalist flower pot",
    },
    {
      img: tableBar,
      name: "Syltherine",
      price: "$199",
      discount: "$50",
      description: "Stylish cafe chair",
      hasDiscount: true,
    },

    {
      img: sofaBar,
      name: "Leviosa",
      price: "$199",
      discount: "$50",
      description: "Stylish cafe chair",
      hasDiscount: true,
    },

    {
      img: washBase,
      name: "Lolito",
      price: "$199",
      discount: "$50",
      description: "Luxury big sofa",
      newProduct: true,
    },

    {
      img: bigSofa,
      name: "Respira",
      price: "$199",
      discount: "$50",
      description: "Outdoor bar table and stool",
      hasDiscount: true,
    },

    {
      img: palorSofa,
      name: "Pinky",
      price: "$199",
      discount: "$50",
      description: "Night Lamp",
    },

    {
      img: latternLap,
      name: "Syltherine",
      price: "$199",
      discount: "$50",
      description: "Stylish cafe chair",
      newProduct: true,
    },

    {
      img: brownSofa,
      name: "Muggo",
      price: "$199",
      discount: "$50",
      description: "Small mug",
      hasDiscount: true,
    },

    {
      img: roomSofa,
      name: "Potty",
      price: "$199",
      discount: "$50",
      description: "Minimalist flower pot",
      newProduct: true,
    },
    {
      img: tableBar,
      name: "Syltherine",
      price: "$199",
      discount: "$50",
      description: "Stylish cafe chair",
    },

    {
      img: sofaBar,
      name: "Leviosa",
      price: "$199",
      discount: "$50",
      description: "Stylish cafe chair",
      hasDiscount: true,
    },

    {
      img: washBase,
      name: "Lolito",
      price: "$199",
      discount: "$50",
      description: "Luxury big sofa",
    },

    {
      img: bigSofa,
      name: "Respira",
      price: "$199",
      discount: "$50",
      description: "Outdoor bar table and stool",
      newProduct: true,
    },

    {
      img: palorSofa,
      name: "Pinky",
      price: "$199",
      discount: "$50",
      description: "Night Lamp",
    },

    {
      img: latternLap,
      name: "Syltherine",
      price: "$199",
      discount: "$50",
      description: "Stylish cafe chair",
      hasDiscount: true,
    },

    {
      img: brownSofa,
      name: "Muggo",
      price: "$199",
      discount: "$50",
      description: "Small mug",
      newProduct: true,
    },

    {
      img: roomSofa,
      name: "Potty",
      price: "$199",
      discount: "$50",
      description: "Minimalist flower pot",
    },
    {
      img: tableBar,
      name: "Syltherine",
      price: "$199",
      discount: "$50",
      description: "Stylish cafe chair",
    },

    {
      img: sofaBar,
      name: "Leviosa",
      price: "$199",
      discount: "$50",
      description: "Stylish cafe chair",
    },

    {
      img: washBase,
      name: "Lolito",
      price: "$199",
      discount: "$50",
      description: "Luxury big sofa",
    },

    {
      img: bigSofa,
      name: "Respira",
      price: "$199",
      discount: "$50",
      description: "Outdoor bar table and stool",
    },

    {
      img: palorSofa,
      name: "Pinky",
      price: "$199",
      discount: "$50",
      description: "Night Lamp",
      newProduct: true,
    },

    {
      img: latternLap,
      name: "Syltherine",
      price: "$199",
      discount: "$50",
      description: "Stylish cafe chair",
      hasDiscount: true,
    },

    {
      img: brownSofa,
      name: "Muggo",
      price: "$199",
      discount: "$50",
      description: "Small mug",
      hasDiscount: true,
    },

    {
      img: roomSofa,
      name: "Potty",
      price: "$199",
      discount: "$50",
      description: "Minimalist flower pot",
    },
    {
      img: tableBar,
      name: "Syltherine",
      price: "$199",
      discount: "$50",
      description: "Stylish cafe chair",
    },

    {
      img: sofaBar,
      name: "Leviosa",
      price: "$199",
      discount: "$50",
      description: "Stylish cafe chair",
    },

    {
      img: washBase,
      name: "Lolito",
      price: "$199",
      discount: "$50",
      description: "Luxury big sofa",
      newProduct: true,
    },

    {
      img: bigSofa,
      name: "Respira",
      price: "$199",
      discount: "$50",
      description: "Outdoor bar table and stool",
    },

    {
      img: palorSofa,
      name: "Pinky",
      price: "$199",
      discount: "$50",
      description: "Night Lamp",
      hasDiscount: true,
    },

    {
      img: latternLap,
      name: "Syltherine",
      price: "$199",
      discount: "$50",
      description: "Stylish cafe chair",
      newProduct: true,
    },

    {
      img: brownSofa,
      name: "Muggo",
      price: "$199",
      discount: "$50",
      description: "Small mug",
      hasDiscount: true,
    },

    {
      img: roomSofa,
      name: "Potty",
      price: "$199",
      discount: "$50",
      description: "Minimalist flower pot",
      newProduct: true,
    },
    {
      img: tableBar,
      name: "Syltherine",
      price: "$199",
      discount: "$50",
      description: "Stylish cafe chair",
      newProduct: true,
    },

    {
      img: sofaBar,
      name: "Leviosa",
      price: "$199",
      discount: "$50",
      description: "Stylish cafe chair",
    },

    {
      img: washBase,
      name: "Lolito",
      price: "$199",
      discount: "$50",
      description: "Luxury big sofa",
      newProduct: true,
    },

    {
      img: bigSofa,
      name: "Respira",
      price: "$199",
      discount: "$50",
      description: "Outdoor bar table and stool",
      hasDiscount: true,
    },

    {
      img: palorSofa,
      name: "Pinky",
      price: "$199",
      discount: "$50",
      description: "Night Lamp",
    },

    {
      img: latternLap,
      name: "Syltherine",
      price: "$199",
      discount: "$50",
      description: "Stylish cafe chair",
      newProduct: true,
    },

    {
      img: brownSofa,
      name: "Muggo",
      price: "$199",
      discount: "$50",
      description: "Small mug",
    },

    {
      img: roomSofa,
      name: "Potty",
      price: "$199",
      discount: "$50",
      description: "Minimalist flower pot",
      newProduct: true,
    },
    {
      img: tableBar,
      name: "Syltherine",
      price: "$199",
      discount: "$50",
      description: "Stylish cafe chair",
      hasDiscount: true,
    },

    {
      img: sofaBar,
      name: "Leviosa",
      price: "$199",
      discount: "$50",
      description: "Stylish cafe chair",
    },

    {
      img: washBase,
      name: "Lolito",
      price: "$199",
      discount: "$50",
      description: "Luxury big sofa",
      hasDiscount: true,
    },

    {
      img: bigSofa,
      name: "Respira",
      price: "$199",
      discount: "$50",
      description: "Outdoor bar table and stool",
    },

    {
      img: palorSofa,
      name: "Pinky",
      price: "$199",
      discount: "$50",
      description: "Night Lamp",
      hasDiscount: true,
    },

    {
      img: latternLap,
      name: "Syltherine",
      price: "$199",
      discount: "$50",
      description: "Stylish cafe chair",
    },

    {
      img: brownSofa,
      name: "Muggo",
      price: "$199",
      discount: "$50",
      description: "Small mug",
      newProduct: true,
    },

    {
      img: roomSofa,
      name: "Potty",
      price: "$199",
      discount: "$50",
      description: "Minimalist flower pot",
    },
    {
      img: tableBar,
      name: "Syltherine",
      price: "$199",
      discount: "$50",
      description: "Stylish cafe chair",
      hasDiscount: true,
    },

    {
      img: sofaBar,
      name: "Leviosa",
      price: "$199",
      discount: "$50",
      description: "Stylish cafe chair",
    },

    {
      img: washBase,
      name: "Lolito",
      price: "$199",
      discount: "$50",
      description: "Luxury big sofa",
      newProduct: true,
    },

    {
      img: bigSofa,
      name: "Respira",
      price: "$199",
      discount: "$50",
      description: "Outdoor bar table and stool",
      newProduct: true,
    },

    {
      img: palorSofa,
      name: "Pinky",
      price: "$199",
      discount: "$50",
      description: "Night Lamp",
    },

    {
      img: latternLap,
      name: "Syltherine",
      price: "$199",
      discount: "$50",
      description: "Stylish cafe chair",
      newProduct: true,
    },

    {
      img: brownSofa,
      name: "Muggo",
      price: "$199",
      discount: "$50",
      description: "Small mug",
      hasDiscount: true,
    },

    {
      img: roomSofa,
      name: "Potty",
      price: "$199",
      discount: "$50",
      description: "Minimalist flower pot",
      newProduct: true,
    },
    {
      img: tableBar,
      name: "Syltherine",
      price: "$199",
      discount: "$50",
      description: "Stylish cafe chair",
    },

    {
      img: sofaBar,
      name: "Leviosa",
      price: "$199",
      discount: "$50",
      description: "Stylish cafe chair",
      hasDiscount: true,
    },

    {
      img: washBase,
      name: "Lolito",
      price: "$199",
      discount: "$50",
      description: "Luxury big sofa",
    },

    {
      img: bigSofa,
      name: "Respira",
      price: "$199",
      discount: "$50",
      description: "Outdoor bar table and stool",
      newProduct: true,
    },

    {
      img: palorSofa,
      name: "Pinky",
      price: "$199",
      discount: "$50",
      description: "Night Lamp",
      hasDiscount: true,
    },

    {
      img: latternLap,
      name: "Syltherine",
      price: "$199",
      discount: "$50",
      description: "Stylish cafe chair",
      newProduct: true,
    },

    {
      img: brownSofa,
      name: "Muggo",
      price: "$199",
      discount: "$50",
      description: "Small mug",
    },

    {
      img: roomSofa,
      name: "Potty",
      price: "$199",
      discount: "$50",
      description: "Minimalist flower pot",
      hasDiscount: true,
    },
    {
      img: tableBar,
      name: "Syltherine",
      price: "$199",
      discount: "$50",
      description: "Stylish cafe chair",
      newProduct: true,
    },

    {
      img: sofaBar,
      name: "Leviosa",
      price: "$199",
      discount: "$50",
      description: "Stylish cafe chair",
    },

    {
      img: washBase,
      name: "Lolito",
      price: "$199",
      discount: "$50",
      description: "Luxury big sofa",
      newProduct: true,
    },

    {
      img: bigSofa,
      name: "Respira",
      price: "$199",
      discount: "$50",
      description: "Outdoor bar table and stool",
      hasDiscount: true,
    },

    {
      img: palorSofa,
      name: "Pinky",
      price: "$199",
      discount: "$50",
      description: "Night Lamp",
    },

    {
      img: latternLap,
      name: "Syltherine",
      price: "$199",
      discount: "$50",
      description: "Stylish cafe chair",
      hasDiscount: true,
    },

    {
      img: brownSofa,
      name: "Muggo",
      price: "$199",
      discount: "$50",
      description: "Small mug",
      newProduct: true,
    },

    {
      img: roomSofa,
      name: "Potty",
      price: "$199",
      discount: "$50",
      description: "Minimalist flower pot",
      newProduct: true,
    },
  ];

  return (
    <div>
      <div className="contain-section">
        {/* <section></section> */}
        <section className="pt-10 leading-10">
          <div className="flex justify-center items-center font-extrabold">
            <h1>Shop</h1>
          </div>
          <div className="flex justify-center items-center gap-3 md:gap-2">
            {/* Link  route */}
            <span>Home</span>
            <span>
              <FaGreaterThan />
            </span>
            <span>
              {/* Link route */}
              <p>Shop</p>
            </span>
          </div>
        </section>

        <section>
          <div></div>
        </section>
      </div>

      <div className="filter flex flex-wrap items-center justify-between gap-4 p-4 bg-[#f5ece6] border-b border-gray-200">
        {/* Left Side */}
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2">
            <FaFilter className="text-gray-600" />
            <span className="text-gray-700 font-medium">Filter</span>
          </div>
          <div className="flex space-x-2">
            <FaList className="text-gray-600 cursor-pointer" />
            <FaTh className="text-gray-600 cursor-pointer" />
          </div>
        </div>

        {/* Center */}
        <div className="text-gray-600 text-sm">Showing 1–16 of 32 results</div>

        {/* Right Side */}
        <div className="flex flex-wrap items-center space-x-3">
          <div className="flex items-center space-x-2">
            <label htmlFor="show" className="text-gray-700 font-medium">
              Show
            </label>
            <select
              id="show"
              className="border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none"
              defaultValue="16"
            >
              <option value="16">16</option>
              <option value="32">32</option>
              <option value="64">64</option>
            </select>
          </div>
          <div className="flex items-center space-x-2">
            <label htmlFor="sort" className="text-gray-700 font-medium">
              Sort by
            </label>
            <select
              id="sort"
              className="border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none"
              defaultValue="default"
            >
              <option value="default">Default</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>

      <section className="flex justify-evenly mt-10 gap-x-1 gap-y-3 md: flex-wrap">
        {products.map((item, ind) => {
          return (
            <ProductCard
              name={item.name}
              img={item.img}
              discount={item.discount}
              price={item.price}
              hasDiscount={item.hasDiscount}
              newProduct={item.newProduct}
            />
          );
        })}
      </section>
    </div>
  );
};

export default Shop;
