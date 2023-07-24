import React, { createContext, useContext, useReducer, useEffect } from "react";
import cartReducer from "../reducers/CartReducer";

const CartContext = createContext();

const getLocalCartData = () => {
  let localCartData = localStorage.getItem("ecoworksCart");
    if (localCartData){
      return JSON.parse(localCartData);
    }
    else {
      return []
    }
    
  }
// };

const initialState = {
  // cart: [],
  cart: getLocalCartData(),
  total_item: "total",
  total_price: "",
  shipping_fee: "",
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (id, selectedColour, quantity, props) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, selectedColour, quantity, props } });
  };

  // increment and decrement the product

  const setDecrease = (id) => {
    dispatch({ type: "SET_DECREMENT", payload: id });
  };

  const setIncrement = (id) => {
    dispatch({ type: "SET_INCREMENT", payload: id });
  };

  // to remove the individual item from cart
  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const setColour = (id, selectedColour) => {
    dispatch({ type: "SET_COLOUR", payload: {id, selectedColour} });
  };

  // to clear the cart
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  // to add the data in localStorage
  // get vs set

  useEffect(() => {
    // dispatch({ type: "CART_TOTAL_ITEM" });
    // dispatch({ type: "CART_TOTAL_PRICE" });
    // dispatch({ type: "CART_ITEM_PRICE_TOTAL" });

    localStorage.setItem("ecoworksCart", JSON.stringify(state.cart));
  }, [state]);

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeItem,
        clearCart,
        setDecrease,
        setIncrement,
        setColour
      }}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };