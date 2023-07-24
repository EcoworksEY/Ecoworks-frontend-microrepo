import React, { createContext, useContext, useReducer, useEffect } from "react";
import wishlistReducer from "../reducers/WishlistReducer";

const WishlistContext = createContext();

const getLocalWishlistData = () => {
  let localWishlistData = localStorage.getItem("ecoworksWishlist");
  if (localWishlistData) {
    return JSON.parse(localWishlistData);
  } else {
    return [];
  }
};

const initialState = {
  wishlist: getLocalWishlistData(),
  total_item: "total",
  total_price: "",
  shipping_fee: "",
};

const WishlistProvider = ({ children }) => {
  const [state, dispatch] = useReducer(wishlistReducer, initialState);

  const addToWishlist = (id, selectedColour, quantity, props) => {
    dispatch({
      type: "ADD_TO_WISHLIST",
      payload: { id, selectedColour, quantity, props },
    });
  };

  // to remove the individual item from wishlist
  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  // to clear the wishlist
  const clearWishlist = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  // to add the data in localStorage
  // get vs set

  useEffect(() => {
    setTimeout(() => {
      localStorage.setItem("ecoworksWishlist", JSON.stringify(state.wishlist));
    }, 50);
  }, [state]);

  return (
    <WishlistContext.Provider
      value={{
        ...state,
        addToWishlist,
        removeItem,
        clearWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

const useWishlistContext = () => {
  return useContext(WishlistContext);
};

export { WishlistProvider, useWishlistContext };
