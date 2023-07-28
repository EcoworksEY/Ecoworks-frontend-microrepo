import React, { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../reducers/ProductReducer";

import temp from "../assets/NavBar/Carry.svg";

import Note from "../assets/NewArrivals/Notebook.svg";
import Write from "../assets/NewArrivals/Write.svg";
import Carry from "../assets/NewArrivals/Carry.svg";
import Art from "../assets/NewArrivals/Art.svg";
import Refills from "../assets/NewArrivals/Refills.svg";

const ProductContext = createContext();

// INTEGRATION WITH BACKEND
const BFF_IP = "http://3.91.226.121:8080/product/list";

var new_arrivals = [
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

var productsDummy = [
  {
    id: 1223561735867137,
    images: [temp],
    title: "Dot Grit Notebooks",
    price: "10.99",
    productType: "Dot Grit Notebooks",
    category: "Featured",
    subCategory: "A5",
    colours: [
      { code: "#0E2C77", name: "Blue" },
      { code: "#000000", name: "Black" },
      { code: "#B8B3B3", name: "Light Grey" },
      { code: "#304043", name: "Dark Grey" },
    ],
  },
  {
    id: 1223561735867138,
    images: [temp],
    title: "Dot Grit Notebooks - A4",
    price: "12.99",
    productType: "Dot Grit Notebooks",
    category: "Featured",
    subCategory: "A4",
    colours: [
      { code: "#0E2C77", name: "Blue" },
      { code: "#000000", name: "Black" },
      { code: "#B8B3B3", name: "Light Grey" },
      { code: "#304043", name: "Dark Grey" },
    ],
  },
  {
    id: 1223561735867139,
    images: [temp],
    title: "Lined Notebook Black Marble ",
    price: "18.89",
    productType: "Dot Grit Notebooks",
    category: "Featured",
    subCategory: "A5",
    colours: [
      { code: "#0E2C77", name: "Blue" },
      { code: "#000000", name: "Black" },
      { code: "#B8B3B3", name: "Light Grey" },
      { code: "#304043", name: "Dark Grey" },
    ],
  },
  {
    id: 1223561735867140,
    images: [temp],
    title: "Recycled Notebook Dark Green",
    price: "10.99",
    productType: "Lined Paper Notebooks",
    category: "Featured",
    subCategory: "A5",
    colours: [
      { code: "#0E2C77", name: "Blue" },
      { code: "#000000", name: "Black" },
      { code: "#B8B3B3", name: "Light Grey" },
      { code: "#304043", name: "Dark Grey" },
    ],
  },
  {
    id: 1223561735867141,
    images: [temp],
    title: "Recycled Paper Cover Notebook",
    price: "15.89",
    productType: "Lined Paper Notebooks",
    category: "Featured",
    subCategory: "A5",
    colours: [
      { code: "#0E2C77", name: "Blue" },
      { code: "#000000", name: "Black" },
      { code: "#B8B3B3", name: "Light Grey" },
      { code: "#304043", name: "Dark Grey" },
    ],
  },
  {
    id: 1223561735867142,
    images: [temp],
    title: "Recycled Lined Notebook Bright Yellow",
    price: "20.89",
    productType: "Dot Grit Notebooks",
    category: "New",
    subCategory: "A5",
    colours: [
      { code: "#0E2C77", name: "Blue" },
      { code: "#000000", name: "Black" },
      { code: "#B8B3B3", name: "Light Grey" },
      { code: "#304043", name: "Dark Grey" },
    ],
  },
  {
    id: 1,
    images: [temp],
    title: "Lined Notebook Black Marble ",
    price: "18.89",
    subCategory: "A5",
    category: "New",
    productType: "Lined Paper Notebooks",
    colours: [
      { code: "#6C6940", name: "Green" },
      { code: "#000000", name: "Black" },
    ],
  },
  {
    id: 2,
    images: [temp],
    title: "M16 Ballpoint Pen Refill",
    price: "15.99",
    category: "New",
    productType: "Popular Items",
    subCategory: "F,M,B",
    colours: [
      { code: "#0E2C77", name: "Blue" },
      { code: "#000000", name: "Black" },
    ],
  },
  {
    id: 3,
    images: [temp],
    title: "Recycled Lined Notebook Bright Yellow",
    price: "20.89",
    subCategory: "A5",
    category: "New",
    productType: "Lined Paper Notebooks",
    colours: [{ code: "#F6D324", name: "Yellow" }],
  },
];
var suggested_products = [
  {
    id: 1,
    images: [temp],
    title: "Lined Notebook Black Marble ",
    price: "18.89",
    subCategory: "A5",
    category: "Write",
    productType: "Lined Paper Notebooks",
    colours: [
      { code: "#6C6940", name: "Green" },
      { code: "#000000", name: "Black" },
    ],
  },
  {
    id: 2,
    images: [temp],
    title: "M16 Ballpoint Pen Refill",
    price: "15.99",
    category: "Note",
    productType: "Popular Items",
    subCategory: "F,M,B",
    colours: [
      { code: "#0E2C77", name: "Blue" },
      { code: "#000000", name: "Black" },
    ],
  },
  {
    id: 3,
    images: [temp],
    title: "Recycled Lined Notebook Bright Yellow",
    price: "20.89",
    category: "Note",
    subCategory: "A5",
    productType: "Lined Paper Notebooks",
    colours: [{ code: "#F6D324", name: "Yellow" }],
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
    // try {
    //   const res = await axios.get(url);
    //   const products = await res.data;
    //   console.log(products);
    //   console.log("Hello");
    // setTimeout(
    //   () => 
      dispatch({ type: "SET_API_DATA", payload: productsDummy })
    //   5000
    // );

    dispatch({ type: "SET_SUGGESTED_PRODUCTS", payload: suggested_products });

    //   } catch (error) {
    //     dispatch({ type: "API_ERROR" });
    //   }
  };

  // TRIGERRED FROM THE SINGLE PRODUCT PAGE
  const getSingleProduct = (id) => {
    // dispatch({ type: "SET_SINGLE_LOADING" });
    // try {
    //   const res = await axios.get(url);
    //   const singleProduct = await res.data;
    dispatch({
      type: "SET_SINGLE_PRODUCT",
      payload: productsDummy.filter((product) => id === product.id),
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
