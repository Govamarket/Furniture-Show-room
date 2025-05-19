import { createContext, useContext, useState, useEffect } from "react";

// Create cart context
const CartContext = createContext();

// Custom hook to use cart context
export const useCart = () => {
  return useContext(CartContext);
};

// Cart provider component
export const CartProvider = ({ children }) => {
  // Initialize cart state from localStorage or empty array
  const [cartItems, setCartItems] = useState(() => {
    try {
      const savedCart = localStorage.getItem("cart");
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error("Error loading cart from localStorage:", error);
      return [];
    }
  });

  // Calculate total items in cart
  const [totalItems, setTotalItems] = useState(0);

  // Calculate cart total price
  const [totalPrice, setTotalPrice] = useState(0);

  // Update localStorage whenever cart changes
  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(cartItems));

      // Update total items count
      setTotalItems(
        cartItems.reduce((total, item) => total + item.quantity, 0)
      );

      // Update total price
      setTotalPrice(
        cartItems.reduce((total, item) => {
          // Convert price string to number, removing currency symbol
          const priceValue = parseFloat(item.price.replace(/[^0-9.-]+/g, ""));
          return total + priceValue * item.quantity;
        }, 0)
      );
    } catch (error) {
      console.error("Error saving cart to localStorage:", error);
    }
  }, [cartItems]);

  // Add item to cart
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      // Check if the product is already in cart
      const existingItem = prevItems.find((item) => item.id === product.id);

      if (existingItem) {
        // If product exists, increase quantity
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // If product is new, add to cart with quantity 1
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  // Remove item from cart
  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  // Update item quantity
  const updateQuantity = (productId, quantity) => {
    // Ensure quantity is at least 1
    const newQuantity = Math.max(1, quantity);

    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Clear cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Value to be provided by context
  const value = {
    cartItems,
    totalItems,
    totalPrice,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
