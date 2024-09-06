import { useState, createContext } from "react";
import PropTypes from "prop-types";
import useCart from "./Hooks/UseCart";

export const ShopContext = createContext({
 
  increaseQuantity: () => {},
  reduceQuantity: () => {},
});
export const ShopProvider = ({ children }) => {
    const [cart, refetch] = useCart();
    const [cartItems, setCartItems] = useState([]);

const increaseQuantity = (items) => {
    const updatedCart = cartItems.map((item) =>
      item.cart._id === items
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );

    setCartItems(updatedCart);
  };

  const reduceQuantity = (items) => {
    const updatedCart = cartItems.map((item) =>
      item.cart._id === items
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );

    setCartItems(updatedCart);
  };
  return (
    <ShopContext.Provider
      value={{
        
        increaseQuantity,
        reduceQuantity,
  
      }}
    >
      {children}
    </ShopContext.Provider>

);
}
ShopProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
