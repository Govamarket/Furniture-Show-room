import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  FaGreaterThan,
  FaStar,
  FaHeart,
  FaShareAlt,
  FaMinus,
  FaPlus,
} from "react-icons/fa";

import InfoBanner from "../Pages/InfoBanner";
import { useCart } from "../Pages/UseCart"; // adjust path based on your folder structure

// These would typically be fetched from an API
import tableBar from "./../../Asset/solfd.png";
import sofaBar from "./../../Asset/sodp.png";
import washBase from "./../../Asset/wasd.png";
import bigSofa from "./../../Asset/sospa.png";
// Import other product images as needed

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  // Mock product database
  // In a real application, this would come from an API call
  const productDatabase = [
    {
      id: "prod-1",
      img: tableBar,
      name: "Syltherine",
      price: "$199",
      discount: "$50",
      description: "Stylish cafe chair",
      hasDiscount: true,
      longDescription:
        "Syltherine is a stylish cafe chair designed for comfort and durability. Perfect for both home and commercial settings.",
      category: "Chair",
      tags: ["chair", "cafe", "stylish"],
      sku: "SYLT001",
      inStock: true,
    },
    {
      id: "prod-2",
      img: sofaBar,
      name: "Leviosa",
      price: "$199",
      discount: "$50",
      description: "Stylish cafe chair",
      newProduct: true,
      longDescription:
        "Leviosa is a cutting-edge design that brings comfort and style to any living room. Its ergonomic design ensures maximum comfort.",
      category: "Sofa",
      tags: ["sofa", "modern", "living room"],
      sku: "LEV002",
      inStock: true,
    },
    {
      id: "prod-3",
      img: washBase,
      name: "Lolito",
      price: "$199",
      discount: "$50",
      description: "Luxury big sofa",
      hasDiscount: true,
      longDescription:
        "Lolito is a luxury big sofa designed for spacious living rooms. Its premium materials ensure lasting comfort and durability.",
      category: "Sofa",
      tags: ["sofa", "luxury", "living room"],
      sku: "LOL003",
      inStock: true,
    },
    {
      id: "prod-4",
      img: bigSofa,
      name: "Respira",
      price: "$199",
      discount: "$50",
      description: "Outdoor bar table and stool",
      newProduct: true,
      longDescription:
        "Respira is an outdoor bar table and stool set perfect for patios and gardens. Weather-resistant materials make it durable for all seasons.",
      category: "Outdoor",
      tags: ["outdoor", "bar", "stool", "table"],
      sku: "RESP004",
      inStock: false,
    },
    // Add more products as needed
  ];

  // Fetch product details
  useEffect(() => {
    // In a real app, this would be an API call
    // For demo purposes, we simulate a network request
    const fetchProduct = () => {
      setLoading(true);
      setTimeout(() => {
        const foundProduct = productDatabase.find((p) => p.id === id);
        setProduct(foundProduct || productDatabase[0]); // Default to first product if not found
        setLoading(false);
      }, 500);
    };

    fetchProduct();
  }, [id]);

  // Handle quantity change
  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  // Handle add to cart
  const handleAddToCart = () => {
    if (product) {
      const productToAdd = {
        id: product.id,
        name: product.name,
        price: product.price,
        img: product.img,
        quantity: quantity,
      };

      addToCart(productToAdd);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="loader"></div>{" "}
        {/* Add a loader animation in your CSS */}
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-10 text-center">
        <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
        <p className="mb-4">
          Sorry, the product you're looking for doesn't exist.
        </p>
        <Link
          to="/shop"
          className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Breadcrumb */}
      <div className="bg-[#f9f1e7] py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <FaGreaterThan size={10} />
            <Link to="/shop" className="hover:underline">
              Shop
            </Link>
            <FaGreaterThan size={10} />
            <span>{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Product Images */}
          <div className="w-full md:w-1/2">
            <div className="bg-[#f9f1e7] rounded-lg flex items-center justify-center p-4">
              <img
                src={product.img}
                alt={product.name}
                className="max-h-96 object-contain"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="w-full md:w-1/2">
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>

            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar key={star} className="text-yellow-400" />
                ))}
              </div>
              <span className="text-gray-500">|</span>
              <span className="text-gray-500">5 Customer Reviews</span>
            </div>

            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl font-bold">{product.price}</span>
              {product.hasDiscount && (
                <span className="text-lg text-gray-500 line-through">
                  {product.discount}
                </span>
              )}
            </div>

            <p className="text-gray-600 mb-6">
              {product.longDescription || product.description}
            </p>

            <div className="flex items-center gap-6 mb-8">
              <div className="flex items-center border rounded-md">
                <button
                  onClick={decrementQuantity}
                  className="px-3 py-2 hover:bg-gray-100"
                >
                  <FaMinus size={12} />
                </button>
                <span className="px-4 py-2 border-x">{quantity}</span>
                <button
                  onClick={incrementQuantity}
                  className="px-3 py-2 hover:bg-gray-100"
                >
                  <FaPlus size={12} />
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
              >
                Add To Cart
              </button>

              <button className="text-gray-500 hover:text-red-500 transition">
                <FaHeart size={24} />
              </button>

              <button className="text-gray-500 hover:text-blue-500 transition">
                <FaShareAlt size={24} />
              </button>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <div className="mb-2">
                <span className="font-medium">SKU:</span> {product.sku}
              </div>
              <div className="mb-2">
                <span className="font-medium">Category:</span>{" "}
                {product.category}
              </div>
              <div className="mb-2">
                <span className="font-medium">Tags:</span>{" "}
                {product.tags?.join(", ")}
              </div>
              <div className="mb-2">
                <span className="font-medium">Share:</span>
                <div className="inline-flex gap-2 ml-2">
                  <a href="#" className="text-gray-500 hover:text-blue-600">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-blue-400">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-red-600">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <InfoBanner />
      </div>
    </div>
  );
};

export default ProductDetail;
