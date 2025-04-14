import React from "react";
import "./Shop.css";
import { FaFilter, FaList, FaTh } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa6";

const Shop = () => {
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
      <div className="flex items-center justify-between p-4 bg-[#f5ece6] border-b border-gray-200 md:flex-wrap">
        {/* Left Side: Filter and Layout Icons */}
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

        {/* Center: Results Info */}
        <div className="text-gray-600">showing 1-16 of 32 results</div>

        {/* Right Side: Show Dropdown and Sort By */}
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2">
            <label htmlFor="show" className="text-gray-700 font-medium">
              Show
            </label>
            <select
              id="show"
              className="border border-gray-300 rounded-md px-2 py-1 focus:outline-none"
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
              className="border border-gray-300 rounded-md px-2 py-1 focus:outline-none"
              defaultValue="default"
            >
              <option value="default">Default</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
