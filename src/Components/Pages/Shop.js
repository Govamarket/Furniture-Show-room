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

      <div className="mt-10">
        <section className="flex justify-evenly gap-x-1 gap-y-10 md: flex-wrap">
          <div className="relative bg-gray-50 rounded-lg">
            <img src={tableBar} className="rounded-lg" />
            <span className="absolute right-7 top-10 bg-red-500 p-2 rounded-full text-white flex items-center justify-center w-10 h-10 text-sm">
              <p>-30</p>
            </span>
            <span>
              <p>Syltherine</p>
            </span>

            <span className="text-sm">
              <p>Stylish cafe chair</p>
            </span>
            <div className="flex gap-1">
              <span>
                <button className="font-bold">
                  <p>Rp 2.500.000</p>
                </button>
              </span>
              <span className="text-sm line-through">
                {" "}
                <p>Rp 3.500.000</p>
              </span>
            </div>
          </div>

          <div className="add-cart relative  bg-gray-300 rounded-lg">
            <img src={sofaBar} className="rounded-lg" />
            <div className="absolute top-20 text-center mx-20">
              <span className="add p-2 text-white font-bold rounded">
                <button>Add to cart</button>
              </span>
              <span className="flex mt-4 text-white font-serif gap-1">
                <p>share</p>
                <p>Compare</p>
                <p>Like</p>
              </span>
            </div>
            <span className="text-black font-bold">
              <p>Leviosa</p>
            </span>
            <span className="text-black text-sm">
              <p>Stylish cafe chair</p>
            </span>
            <span className="font-bold">
              <button>
                {" "}
                <p>Rp 2.500.000</p>
              </button>
            </span>
          </div>

          <div className=" bg-gray-50 rounded-lg">
            <div className="relative">
              <img src={washBase} className="rounded-lg" />
              <span className="absolute right-7 top-10 bg-red-500 p-2 rounded-full text-white flex items-center justify-center w-10 h-10 text-sm">
                <p>-50</p>
              </span>
            </div>

            <button>
              <p>Lolito</p>
            </button>
            <span className="text-sm">
              <p>Luxury big sofa</p>
            </span>

            <div className="flex gap-2">
              <span className="font-bold">
                <button>
                  {" "}
                  <p>Rp 7.000.000</p>
                </button>
              </span>
              <span className="text-sm line-through">
                <p>Rp 14.000.000</p>
              </span>
            </div>
          </div>

          <div className=" bg-gray-50 rounded-lg">
            <div className="relative">
              <img src={roomSofa} className="rounded-lg" />
              <span className="absolute right-7 top-10 bg-green-500 p-2 rounded-full text-white flex items-center justify-center w-10 h-10">
                <p>New</p>
              </span>
            </div>

            <span>
              <p>Respira</p>
            </span>

            <span className="text-sm">
              <p>Outdoor bar table and stool</p>
            </span>
            <div className="flex gap-1">
              <span>
                <button className="font-bold">
                  <p>Rp 2.500.000</p>
                </button>
              </span>
              <span className="line-through">
                {" "}
                <p>Rp 3.500.000</p>
              </span>
            </div>
          </div>

          <div className=" bg-gray-50 rounded-lg">
            <img src={bigSofa} className="rounded-lg" />
            <span className="font-bold">
              <p>Grifo</p>
            </span>

            <span className="text-sm">
              <p>Night Lamp</p>
            </span>
            <div className="flex gap-1">
              <span>
                <button className="font-bold">
                  <p>Rp 1.500.000</p>
                </button>
              </span>
            </div>
          </div>

          <div className=" bg-gray-50 rounded-lg">
            <div className="relative">
              <img src={palorSofa} className="rounded-lg" />
              <span className="absolute right-7 top-10 bg-green-500 p-2 rounded-full text-white flex items-center justify-center w-10 h-10">
                <p>New</p>
              </span>
            </div>

            <span className="font-bold">
              <p>Muggo</p>
            </span>

            <span className="text-sm">
              <p>Small mug</p>
            </span>
            <div className="flex gap-1">
              <span>
                <button className="font-bold">
                  <p>Rp 150.000</p>
                </button>
              </span>
            </div>
          </div>

          <div className=" bg-gray-50 rounded-lg">
            <div className="relative">
              <img src={latternLap} className="rounded-lg" />
              <span className="absolute right-7 top-10 bg-red-500 p-2 rounded-full text-white flex items-center justify-center w-10 h-10 text-sm">
                <p>-50</p>
              </span>
            </div>
            <span className="font-bold">
              <p>Pinky</p>
            </span>

            <span className="text-sm">
              <p>Cute bed set</p>
            </span>
            <div className="flex gap-1">
              <span>
                <button className="font-bold">
                  <p>Rp 7.000.000</p>
                </button>
              </span>
              <span className="text-sm line-through text-gray-500">
                {" "}
                <p>Rp 14.000.000</p>
              </span>
            </div>
          </div>

          <div className=" bg-gray-50 rounded-lg">
            <div className="relative">
              <img src={brownSofa} className="rounded-lg" />
              <span className="absolute right-7 top-10 bg-green-500 p-2 rounded-full text-white flex items-center justify-center w-10 h-10">
                <p>New</p>
              </span>
            </div>
            <span className="font-bold">
              <p>Potty</p>
            </span>

            <span className="text-sm">
              <p>Minimalist flower pot</p>
            </span>
            <div className="flex gap-1">
              <span>
                <button className="font-bold">
                  <p>Rp 2.500.000</p>
                </button>
              </span>
            </div>
          </div>
        </section>
      </div>
      <div>
        {/* Replication of images on shop list {items} */}
        <section className="flex justify-evenly gap-x-1 gap-y-10 md: flex-wrap">
          <div className="relative bg-gray-50 rounded-lg">
            <img src={tableBar} className="rounded-lg" />
            <span className="absolute right-7 top-10 bg-red-500 p-2 rounded-full text-white flex items-center justify-center w-10 h-10 text-sm">
              <p>-30</p>
            </span>
            <span>
              <p>Syltherine</p>
            </span>

            <span className="text-sm">
              <p>Stylish cafe chair</p>
            </span>
            <div className="flex gap-1">
              <span>
                <button className="font-bold">
                  <p>Rp 2.500.000</p>
                </button>
              </span>
              <span className="text-sm line-through">
                {" "}
                <p>Rp 3.500.000</p>
              </span>
            </div>
          </div>

          <div className="add-cart relative  bg-gray-300 rounded-lg">
            <img src={sofaBar} className="rounded-lg" />
            <div className="absolute top-20 text-center mx-20">
              <span className="add p-2 text-white font-bold rounded">
                <button>Add to cart</button>
              </span>
              <span className="flex mt-4 text-white font-serif gap-1">
                <p>share</p>
                <p>Compare</p>
                <p>Like</p>
              </span>
            </div>
            <span className="text-black font-bold">
              <p>Leviosa</p>
            </span>
            <span className="text-black text-sm">
              <p>Stylish cafe chair</p>
            </span>
            <span className="font-bold">
              <button>
                {" "}
                <p>Rp 2.500.000</p>
              </button>
            </span>
          </div>

          <div className=" bg-gray-50 rounded-lg">
            <div className="relative">
              <img src={washBase} className="rounded-lg" />
              <span className="absolute right-7 top-10 bg-red-500 p-2 rounded-full text-white flex items-center justify-center w-10 h-10 text-sm">
                <p>-50</p>
              </span>
            </div>

            <button>
              <p>Lolito</p>
            </button>
            <span className="text-sm">
              <p>Luxury big sofa</p>
            </span>

            <div className="flex gap-2">
              <span className="font-bold">
                <button>
                  {" "}
                  <p>Rp 7.000.000</p>
                </button>
              </span>
              <span className="text-sm line-through">
                <p>Rp 14.000.000</p>
              </span>
            </div>
          </div>

          <div className=" bg-gray-50 rounded-lg">
            <div className="relative">
              <img src={roomSofa} className="rounded-lg" />
              <span className="absolute right-7 top-10 bg-green-500 p-2 rounded-full text-white flex items-center justify-center w-10 h-10">
                <p>New</p>
              </span>
            </div>

            <span>
              <p>Respira</p>
            </span>

            <span className="text-sm">
              <p>Outdoor bar table and stool</p>
            </span>
            <div className="flex gap-1">
              <span>
                <button className="font-bold">
                  <p>Rp 2.500.000</p>
                </button>
              </span>
              <span className="line-through">
                {" "}
                <p>Rp 3.500.000</p>
              </span>
            </div>
          </div>

          <div className=" bg-gray-50 rounded-lg">
            <img src={bigSofa} className="rounded-lg" />
            <span className="font-bold">
              <p>Grifo</p>
            </span>

            <span className="text-sm">
              <p>Night Lamp</p>
            </span>
            <div className="flex gap-1">
              <span>
                <button className="font-bold">
                  <p>Rp 1.500.000</p>
                </button>
              </span>
            </div>
          </div>

          <div className=" bg-gray-50 rounded-lg">
            <div className="relative">
              <img src={palorSofa} className="rounded-lg" />
              <span className="absolute right-7 top-10 bg-green-500 p-2 rounded-full text-white flex items-center justify-center w-10 h-10">
                <p>New</p>
              </span>
            </div>

            <span className="font-bold">
              <p>Muggo</p>
            </span>

            <span className="text-sm">
              <p>Small mug</p>
            </span>
            <div className="flex gap-1">
              <span>
                <button className="font-bold">
                  <p>Rp 150.000</p>
                </button>
              </span>
            </div>
          </div>

          <div className=" bg-gray-50 rounded-lg">
            <div className="relative">
              <img src={latternLap} className="rounded-lg" />
              <span className="absolute right-7 top-10 bg-red-500 p-2 rounded-full text-white flex items-center justify-center w-10 h-10 text-sm">
                <p>-50</p>
              </span>
            </div>
            <span className="font-bold">
              <p>Pinky</p>
            </span>

            <span className="text-sm">
              <p>Cute bed set</p>
            </span>
            <div className="flex gap-1">
              <span>
                <button className="font-bold">
                  <p>Rp 7.000.000</p>
                </button>
              </span>
              <span className="text-sm line-through text-gray-500">
                {" "}
                <p>Rp 14.000.000</p>
              </span>
            </div>
          </div>

          <div className=" bg-gray-50 rounded-lg">
            <div className="relative">
              <img src={brownSofa} className="rounded-lg" />
              <span className="absolute right-7 top-10 bg-green-500 p-2 rounded-full text-white flex items-center justify-center w-10 h-10">
                <p>New</p>
              </span>
            </div>
            <span className="font-bold">
              <p>Potty</p>
            </span>

            <span className="text-sm">
              <p>Minimalist flower pot</p>
            </span>
            <div className="flex gap-1">
              <span>
                <button className="font-bold">
                  <p>Rp 2.500.000</p>
                </button>
              </span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Shop;
