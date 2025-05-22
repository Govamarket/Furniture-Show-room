import React, { useState } from "react";
import "./Shop.css";
import { Link } from "react-router-dom";
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
import ProductCard from "../Products/productCard";
import Pagination from "./Pagination";
import InfoBanner from "./InfoBanner";
import { CartProvider } from "./UseCart"; // Import the CartProvider

const Shop = () => {
  // Product data with unique IDs
  const products = [
    {
      id: "prod-1",
      img: tableBar,
      name: "Syltherine",
      price: "$199",
      discount: "$50",
      description: "Stylish cafe chair",
      hasDiscount: true,
    },

    {
      id: "prod-2",
      img: sofaBar,
      name: "Leviosa",
      price: "$199",
      discount: "$50",
      description: "Stylish cafe chair",
      newProduct: true,
    },

    {
      id: "prod-3",
      img: washBase,
      name: "Lolito",
      price: "$199",
      discount: "$50",
      description: "Luxury big sofa",
      hasDiscount: true,
    },

    {
      id: "prod-4",
      img: bigSofa,
      name: "Respira",
      price: "$199",
      discount: "$50",
      description: "Outdoor bar table and stool",
      newProduct: true,
    },

    {
      id: "prod-5",
      img: palorSofa,
      name: "Pinky",
      price: "$199",
      discount: "$50",
      description: "Night Lamp",
      hasDiscount: true,
    },

    {
      id: "prod-6",
      img: latternLap,
      name: "Syltherine",
      price: "$199",
      discount: "$50",
      description: "Stylish cafe chair",
      newProduct: true,
    },

    {
      id: "prod-7",
      img: brownSofa,
      name: "Muggo",
      price: "$199",
      discount: "$50",
      description: "Small mug",
      hasDiscount: true,
    },

    {
      id: "prod-8",
      img: roomSofa,
      name: "Potty",
      price: "$199",
      discount: "$50",
      description: "Minimalist flower pot",
    },

    {
      id: "prod-9",
      img: tableBar,
      name: "Syltherine",
      price: "$199",
      discount: "$50",
      description: "Stylish cafe chair",
      hasDiscount: true,
    },

    {
      id: "prod-10",
      img: sofaBar,
      name: "Leviosa",
      price: "$199",
      discount: "$50",
      description: "Stylish cafe chair",
    },

    {
      id: "prod-11",
      img: washBase,
      name: "Lolito",
      price: "$199",
      discount: "$50",
      description: "Luxury big sofa",
      hasDiscount: true,
    },

    {
      id: "prod-12",
      img: bigSofa,
      name: "Respira",
      price: "$199",
      discount: "$50",
      description: "Outdoor bar table and stool",
      newProduct: true,
    },

    {
      id: "prod-13",
      img: palorSofa,
      name: "Pinky",
      price: "$199",
      discount: "$50",
      description: "Night Lamp",
      hasDiscount: true,
    },

    {
      id: "prod-14",
      img: latternLap,
      name: "Syltherine",
      price: "$199",
      discount: "$50",
      description: "Stylish cafe chair",
    },

    {
      id: "prod-15",
      img: brownSofa,
      name: "Muggo",
      price: "$199",
      discount: "$50",
      description: "Small mug",
      hasDiscount: true,
      newProduct: true,
    },

    {
      id: "prod-16",
      img: roomSofa,
      name: "Potty",
      price: "$199",
      discount: "$50",
      description: "Minimalist flower pot",
    },
    {
      id: "prod-17",
      img: tableBar,
      name: "Syltherine",
      price: "$199",
      discount: "$50",
      description: "Stylish cafe chair",
      hasDiscount: true,
    },

    {
      id: "prod-18",
      img: sofaBar,
      name: "Leviosa",
      price: "$199",
      discount: "$50",
      description: "Stylish cafe chair",
      hasDiscount: true,
    },
  ];

  // State for pagination and filtering
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(16);
  const [sortBy, setSortBy] = useState("default");
  const [viewMode, setViewMode] = useState("grid"); // "grid" or "list"

  // Calculate total pages
  const totalPages = Math.ceil(products.length / itemsPerPage);

  // Get current products
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Sort products based on selection
  const sortedProducts = [...products].sort((a, b) => {
    if (sortBy === "price-asc") {
      const priceA = parseFloat(a.price.replace(/[^0-9.-]+/g, ""));
      const priceB = parseFloat(b.price.replace(/[^0-9.-]+/g, ""));
      return priceA - priceB;
    } else if (sortBy === "price-desc") {
      const priceA = parseFloat(a.price.replace(/[^0-9.-]+/g, ""));
      const priceB = parseFloat(b.price.replace(/[^0-9.-]+/g, ""));
      return priceB - priceA;
    }
    return 0; // Default, no sorting
  });

  const currentProducts = sortedProducts.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Handle items per page change
  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(parseInt(e.target.value, 10));
    setCurrentPage(1); // Reset to first page when changing items per page
  };

  // Handle sorting change
  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  // Handle view mode change
  const toggleViewMode = (mode) => {
    setViewMode(mode);
  };

  return (
    <CartProvider>
      <div>
        <div className="contain-section">
          <section className="pt-10 leading-10">
            <div className="flex justify-center items-center font-extrabold">
              <h1>Shop</h1>
            </div>
            <div className="flex justify-center items-center gap-3 md:gap-2">
              <Link to="/">
                <span>Home</span>
              </Link>
              <span>
                <FaGreaterThan />
              </span>
              <span>
                <p>Shop</p>
              </span>
            </div>
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
              <FaList
                className={`cursor-pointer ${
                  viewMode === "list" ? "text-black" : "text-gray-600"
                }`}
                onClick={() => toggleViewMode("list")}
              />
              <FaTh
                className={`cursor-pointer ${
                  viewMode === "grid" ? "text-black" : "text-gray-600"
                }`}
                onClick={() => toggleViewMode("grid")}
              />
            </div>
          </div>

          {/* Center */}
          <div className="text-gray-600 text-sm">
            Showing {indexOfFirstItem + 1}–
            {Math.min(indexOfLastItem, products.length)} of {products.length}{" "}
            results
          </div>

          {/* Right Side */}
          <div className="flex flex-wrap items-center space-x-3">
            <div className="flex items-center space-x-2">
              <label htmlFor="show" className="text-gray-700 font-medium">
                Show
              </label>
              <select
                id="show"
                className="border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none"
                value={itemsPerPage}
                onChange={handleItemsPerPageChange}
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
                value={sortBy}
                onChange={handleSortChange}
              >
                <option value="default">Default</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        <section
          className={`mt-10 ${
            viewMode === "grid"
              ? "flex justify-evenly gap-x-1 gap-y-3 flex-wrap"
              : "flex flex-col gap-4 px-4"
          }`}
        >
          {currentProducts.map((item) => (
            <div key={item.id} className={viewMode === "grid " ? "" : "w-80"}>
              <ProductCard
                id={item.id}
                name={item.name}
                img={item.img}
                discount={item.discount}
                price={item.price}
                description={item.description}
                hasDiscount={item.hasDiscount}
                newProduct={item.newProduct}
              />
            </div>
          ))}
        </section>

        <div>
          <section>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </section>
        </div>

        <div className="mt-10">
          <InfoBanner />
        </div>
      </div>
    </CartProvider>
  );
};

export default Shop;
