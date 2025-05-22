import React, { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import ProductCard from "../Products/productCard";
import InfoBanner from "./InfoBanner";
import { useCart } from "./UseCart";

// This would ideally come from a central data store or context
// For now, importing directly (you should refactor this to use a data provider)
import tableBar from "./../../Asset/solfd.png";
import sofaBar from "./../../Asset/sodp.png";
import washBase from "./../../Asset/wasd.png";
import bigSofa from "./../../Asset/sospa.png";
import palorSofa from "./../../Asset/sopls.png";
import latternLap from "./../../Asset/lap.png";
import brownSofa from "./../../Asset/sof.png";
import roomSofa from "./../../Asset/solf.png";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const { addToCart } = useCart();

  // This would normally be fetched from an API or context
  // Using the same product data structure from your Shop component
  const allProducts = [
    {
      id: "prod-1",
      img: tableBar,
      name: "Syltherine",
      price: "$199",
      discount: "$50",
      description: "Stylish cafe chair",
      hasDiscount: true,
      category: "chair",
    },
    {
      id: "prod-2",
      img: sofaBar,
      name: "Leviosa",
      price: "$199",
      discount: "$50",
      description: "Stylish cafe chair",
      newProduct: true,
      category: "chair",
    },
    {
      id: "prod-3",
      img: washBase,
      name: "Lolito",
      price: "$199",
      discount: "$50",
      description: "Luxury big sofa",
      hasDiscount: true,
      category: "sofa",
    },
    {
      id: "prod-4",
      img: bigSofa,
      name: "Respira",
      price: "$199",
      discount: "$50",
      description: "Outdoor bar table and stool",
      newProduct: true,
      category: "table",
    },
    {
      id: "prod-5",
      img: palorSofa,
      name: "Pinky",
      price: "$199",
      discount: "$50",
      description: "Night Lamp",
      hasDiscount: true,
      category: "lamp",
    },
    {
      id: "prod-6",
      img: latternLap,
      name: "Syltherine Lamp",
      price: "$149",
      discount: "$30",
      description: "Modern desk lamp",
      newProduct: true,
      category: "lamp",
    },
    {
      id: "prod-7",
      img: brownSofa,
      name: "Muggo",
      price: "$199",
      discount: "$50",
      description: "Small mug",
      hasDiscount: true,
      category: "accessory",
    },
    {
      id: "prod-8",
      img: roomSofa,
      name: "Potty",
      price: "$199",
      discount: "$50",
      description: "Minimalist flower pot",
      category: "accessory",
    },
  ];

  // Search function
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setSearchResults([]);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);

    const term = searchTerm.toLowerCase();
    const filteredResults = allProducts.filter(
      (product) =>
        product.name.toLowerCase().includes(term) ||
        product.description.toLowerCase().includes(term) ||
        product.category.toLowerCase().includes(term)
    );

    setSearchResults(filteredResults);
  }, [searchTerm]);

  const handleSearch = (e) => {
    e.preventDefault();
    // The search is already happening via the useEffect
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const clearSearch = () => {
    setSearchTerm("");
    setSearchResults([]);
    setIsSearching(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Search Header */}
      <div className="bg-[#f5ece6] py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Search Products
          </h1>

          <form onSubmit={handleSearch} className="relative">
            <div className="flex items-center border-2 border-gray-300 rounded-lg bg-white overflow-hidden">
              <input
                type="text"
                placeholder="Search for products..."
                value={searchTerm}
                onChange={handleInputChange}
                className="w-full px-4 py-3 focus:outline-none text-gray-700"
              />
              <button
                type="submit"
                className="bg-black text-white px-6 py-3 h-full flex items-center justify-center"
              >
                <CiSearch size={20} />
              </button>
            </div>
            {searchTerm && (
              <button
                type="button"
                onClick={clearSearch}
                className="absolute right-16 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            )}
          </form>

          {isSearching && (
            <p className="mt-4 text-gray-600 text-center">
              {searchResults.length === 0
                ? "No products found. Try a different search term."
                : `Found ${searchResults.length} product${
                    searchResults.length !== 1 ? "s" : ""
                  }`}
            </p>
          )}
        </div>
      </div>

      {/* Search Results */}
      <div className="container mx-auto px-4 py-8">
        {searchResults.length > 0 && (
          <>
            <h2 className="text-xl font-semibold mb-6">
              Search Results for "{searchTerm}"
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {searchResults.map((product) => (
                <div key={product.id}>
                  <ProductCard
                    id={product.id}
                    name={product.name}
                    img={product.img}
                    discount={product.discount}
                    price={product.price}
                    description={product.description}
                    hasDiscount={product.hasDiscount}
                    newProduct={product.newProduct}
                  />
                </div>
              ))}
            </div>
          </>
        )}

        {searchTerm === "" && (
          <div className="text-center py-12">
            <h2 className="text-2xl font-semibold mb-4">
              Find what you're looking for
            </h2>
            <p className="text-gray-600 mb-8 max-w-lg mx-auto">
              Search our catalog for the perfect piece to complement your home.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {["Sofa", "Chair", "Table", "Lamp"].map((category) => (
                <Link
                  key={category}
                  to={`/shop?category=${category.toLowerCase()}`}
                  className="bg-[#f5ece6] hover:bg-[#e9d8c9] p-6 rounded-lg transition-colors"
                >
                  <h3 className="font-medium text-lg">{category}</h3>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Popular searches section when no search is active */}
      {!isSearching && (
        <div className="bg-gray-50 py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-semibold mb-6 text-center">
              Popular Searches
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Modern Sofa",
                "Wooden Chair",
                "Dining Table",
                "Desk Lamp",
                "Bookshelf",
                "Coffee Table",
                "Bed Frame",
              ].map((term) => (
                <button
                  key={term}
                  onClick={() => setSearchTerm(term)}
                  className="bg-white border border-gray-300 px-4 py-2 rounded-full text-sm hover:bg-gray-100 transition-colors"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Recently viewed products - This would typically use local storage or user session data */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-xl font-semibold mb-6">Recently Viewed</h2>
        <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-4 gap-6">
          {allProducts.slice(0, 4).map((product) => (
            <div key={product.id}>
              <ProductCard
                id={product.id}
                name={product.name}
                img={product.img}
                discount={product.discount}
                price={product.price}
                description={product.description}
                hasDiscount={product.hasDiscount}
                newProduct={product.newProduct}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Info Banner */}
      <InfoBanner />
    </div>
  );
};

export default Search;
