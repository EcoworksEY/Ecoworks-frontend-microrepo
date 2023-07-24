import React, { createContext, useContext, useReducer, useEffect } from "react";
import { useProductContext } from "./ProductContext";
import reducer from "../reducers/ProductFilterReducer";

const ProductFilterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
  filters: {
    text: "",
    productType: ["Dot Grit Notebooks"],
    colour: [],
    size: [],
    price: [],
    // layout: "",
    // brand: ""
  },
};

export const ProductFilterContextProvider = ({ children }) => {
  const { products } = useProductContext();

  const [state, dispatch] = useReducer(reducer, initialState);

  // sorting function
  const sorting = (event) => {
    let userValue = event.target.value;
    dispatch({ type: "GET_SORT_VALUE", payload: userValue });
  };

  // update the filter values
  const updateFilterValue = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    console.log(value);

    return dispatch({ type: "UPDATE_FILTERS_VALUE", payload: { name, value } });
  };

  // to clear the filter
  const clearFilters = () => {
    dispatch({ type: "CLEAR_FILTERS" });
  };

  // to sort the product
  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" });
    dispatch({ type: "SORTING_PRODUCTS" });
  }, [products, state.sorting_value, state.filters]);

  // to load all the products for grid and list view
  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);

  return (
    <ProductFilterContext.Provider
      value={{
        ...state,
        sorting,
        updateFilterValue,
        clearFilters,
      }}>
      {children}
    </ProductFilterContext.Provider>
  );
};

export const useProductFilterContext = () => {
  return useContext(ProductFilterContext);
};