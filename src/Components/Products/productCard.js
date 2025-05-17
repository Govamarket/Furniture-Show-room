import React from "react";
import useCart from "../Pages/UseCart"; // adjust path based on your folder structure

const ProductCard = ({
  img,
  name,
  description,
  discount,
  price,
  hasDiscount,
  newProduct,
  id, // Ensure each product has a unique id
}) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    const product = { id, name, price, img };
    addToCart(product);
  };

  return (
    <div className="relative bg-gray-50 rounded-lg p-4 shadow">
      <img
        src={img}
        className="rounded-lg w-full h-48 object-cover"
        alt={name}
      />

      {hasDiscount && (
        <span className="absolute right-7 top-10 bg-red-500 p-2 rounded-full text-white flex items-center justify-center w-10 h-10 text-xs">
          -30%
        </span>
      )}

      {newProduct && (
        <span className="absolute left-4 top-10 bg-green-500 p-2 rounded-full text-white flex items-center justify-center w-10 h-10 text-xs">
          New
        </span>
      )}

      <div className="mt-3 space-y-1">
        <p className="font-bold text-lg">{name}</p>
        <p className="text-sm text-gray-600">{description}</p>

        <div className="flex items-center gap-2 mt-2">
          <span className="font-bold text-md text-black">₦{price}</span>
          {discount && (
            <span className="text-sm text-gray-400 line-through">
              ₦{discount}
            </span>
          )}
        </div>

        <button
          onClick={handleAddToCart}
          className="mt-2 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
