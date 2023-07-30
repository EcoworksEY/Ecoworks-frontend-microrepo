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
const BFF_IP = "https://www.eyecoworks.com:444/product/list";

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
      const res = await axios.get(url, {timeout: 10000});
      const products = await res.data;
      console.log(products);
      console.log("Hello");
    // setTimeout(
    //   () => 
      dispatch({ type: "SET_API_DATA", payload: products.products })
    //   5000
    // );

    // dispatch({ type: "SET_SUGGESTED_PRODUCTS", payload: suggested_products });

      } catch (error) {
        dispatch({ type: "API_ERROR" });
      }
  };

  // TRIGERRED FROM THE SINGLE PRODUCT PAGE
  const getSingleProduct = (id) => {
    // dispatch({ type: "SET_SINGLE_LOADING" });
    // try {
    //   const res = await axios.get(url);
    //   const singleProduct = await res.data;
    dispatch({
      type: "SET_SINGLE_PRODUCT",
      payload: state.products.filter((product) => id === product.id),
    });

    // } catch (error) {
    //   dispatch({ type: "SET_SINGLE_ERROR" });
    // }
  };

  useEffect(() => {
    getProducts(BFF_IP);
  }, []);

  // Use Effect for async function definition and fetching via BFF
  //    useEffect(() => {
  //     // Function for handling graphql access specifically for procut listing
  //     const listProducts = async () => {
  //       const options = {
  //         method: "POST",
  //         url: BFF_IP,
  //         headers: {
  //           "content-type": "application/json",
  //         },
  //         data: {
  //           query: `{
  //                         productList {
  //                             product_id
  //                             name
  //                             description
  //                             price
  //                             sku_units
  //                         }
  //                     }`,
  //         },
  //       };
  //       // axios
  //       // 	.request(options)
  //       // 	.then(function (response) {
  //       // 		console.log(response.data); // Response
  //       //         return response.data;
  //       // 	})
  //       // 	.catch(function (error) {
  //       // 		console.error('Axios error: ',error);
  //       // 	});
  //       try {
  //         // HAVE to await here. Otherwise it does not work.
  //         // Also, maybe think about inserting a loading thingy.

  //         const response = await axios.request(options);
  //         setProducts(response.data.data.productList);
  //         //return response;
  //       } catch (error) {
  //         console.error("Axios error: ", error);
  //         return error;
  //       }
  //     };

  // Actually invoke the function now
  //     listProducts();
  //   }, []);

  //   console.log(`Products is: ${JSON.stringify(products)}`);

  //   var index = 0;
  //   while (index < products.length) {
  //     // append to the productsData
  //     var productItem = products[index];
  //     console.log(`We have producItem = ${JSON.stringify(productItem)}`);
  //     productsDummy[index].id = productItem.product_id;
  //     productsDummy[index].title = productItem.name;
  //     productsDummy[index].price = productItem.price;

  //     index += 1;
  //   }

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
