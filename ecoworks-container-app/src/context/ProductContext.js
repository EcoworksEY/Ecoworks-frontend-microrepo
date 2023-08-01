import React, { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../reducers/ProductReducer";

import Note from "../assets/NewArrivals/Notebook.svg";
import Write from "../assets/NewArrivals/Write.svg";
import Carry from "../assets/NewArrivals/Carry.svg";
import Art from "../assets/NewArrivals/Art.svg";
import Refills from "../assets/NewArrivals/Refills.svg";

const ProductContext = createContext();

// INTEGRATION WITH BACKEND
const BFF_IP = "https://api.eyecoworks.com/product/list";

const new_arrivals = [
  {
    title: "Notebook",
    images: [Note],
  },
  {
    title: "Write",
    images: [Write],
  },
  {
    title: "Carry",
    images: [Carry],
  },
  {
    title: "Refills",
    images: [Refills],
  },
  {
    title: "Art Supplies",
    images: [Art],
  },
];

const initialState = {
  isLoading: true,
  isError: false,
  products: [],
  featuredProducts: [],
  newProducts1: [],
  newProducts2: new_arrivals,
  isSingleLoading: false,
  singleProduct: {},
  suggestedProducts: [],
};

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url, { timeout: 60000 });
      const products = await res.data;
      console.log(products);
      console.log("Hello");
      // setTimeout(
      //   () =>
      dispatch({ type: "SET_API_DATA", payload: products.products });
      //   5000
      // );
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  // TRIGERRED FROM THE SINGLE PRODUCT PAGE
  const getSingleProduct = (id) => {
    dispatch({
      type: "SET_SUGGESTED_PRODUCTS",
      payload: [
        state.products[getRandomNumberInt(0, state.products.length)],
        state.products[getRandomNumberInt(0, state.products.length)],
        state.products[getRandomNumberInt(0, state.products.length)],
      ],
    });
    dispatch({
      type: "SET_SINGLE_PRODUCT",
      payload: state.products.filter((product) => id === product.id),
    });

    // } catch (error) {
    //   dispatch({ type: "SET_SINGLE_ERROR" });
    // }
  };

  const getRandomNumberInt = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  useEffect(() => {
    getProducts(BFF_IP);
  }, []);

  return (
    <ProductContext.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

// custom hooks
const useProductContext = () => {
  return useContext(ProductContext);
};

export { ProductProvider, ProductContext, useProductContext };
