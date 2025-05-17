import { useContext } from "react";
import CartContext from "./CartProvider";

const useCart = () => {
  const { state, dispatch } = useContext(CartContext);

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return {
    cartItems: state.cartItems,
    addToCart,
    removeFromCart,
    clearCart,
  };
};

export default useCart;
