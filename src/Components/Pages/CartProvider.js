import React from "react";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../Pages/UseCart"; // Adjust path based on your folder structure

const CartIndicator = () => {
  const { totalItems } = useCart();

  return (
    <Link to="/cart" className="relative">
      <div className="flex items-center">
        <ShoppingCart size={24} />
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {totalItems > 99 ? "99+" : totalItems}
          </span>
        )}
      </div>
    </Link>
  );
};

export default CartIndicator;
