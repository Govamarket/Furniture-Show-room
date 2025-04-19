import React from "react";
import { X } from "lucide-react";

const CartPage = () => {
  const cartItems = [
    {
      id: 1,
      name: "Asgaard sofa",
      image: "/images/asgaard.jpg",
      price: 250000,
      quantity: 1,
    },
    {
      id: 2,
      name: "Casaliving Wood",
      image: "/images/casaliving.jpg",
      price: 270000,
      quantity: 1,
    },
  ];

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="w-full max-w-md bg-white p-6 shadow-xl rounded-md">
      <h2 className="text-xl font-semibold mb-4">Shopping Cart</h2>
      <div className="divide-y">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center justify-between py-4">
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover rounded"
              />
              <div>
                <h4 className="font-semibold">{item.name}</h4>
                <p className="text-sm">
                  {item.quantity} x{" "}
                  <span className="text-yellow-600 font-semibold">
                    Rs. {item.price.toLocaleString()}
                  </span>
                </p>
              </div>
            </div>
            <button className="text-gray-500 hover:text-red-500">
              <X size={20} />
            </button>
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-between items-center text-lg font-semibold">
        <span>Subtotal</span>
        <span className="text-yellow-600">Rs. {subtotal.toLocaleString()}</span>
      </div>
      <div className="mt-6 flex gap-2">
        <button variant="outline" className="w-full border">
          Cart
        </button>
        <button className="w-full border">Checkout</button>
        <button variant="outline" className="w-full border">
          Comparison
        </button>
      </div>
    </div>
  );
};

export default CartPage;
