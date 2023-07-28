import React, { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../reducers/ProductReducer";

import temp from "../assets/tempProduct.svg";
import tempProduct2 from "../assets/tempProduct2.svg";
import productImage from "../assets/SampleProduct/Image3.svg";
import productImage3 from "../assets/SampleProduct/Image2.svg";
import sugProd1 from "../assets/SampleProduct/suggestedProd1.svg";
import sugProd2 from "../assets/SampleProduct/suggestedProd2.svg";
import sugProd3 from "../assets/tempProduct2.svg";
import meadProd from "../assets/SampleProduct/meadProd.svg";
const ProductContext = createContext();

// INTEGRATION WITH BACKEND
const BFF_IP = "http://3.91.226.121:8080/product/list";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featuredProducts: [],
  newProducts: [],
  isSingleLoading: false,
  singleProduct: {},
  suggestedProducts: [],
};

var productsDummy = [
  {
    id: 1223561735867137,
    images: [temp, tempProduct2],
    title: "Dot Grit Notebooks",
    price: "10.99",
    productType: "Dot Grit Notebooks",
    category: "Note",
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
    images: [temp, tempProduct2],
    title: "Dot Grit Notebooks - A4",
    price: "12.99",
    productType: "Dot Grit Notebooks",
    category: "Note",
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
    images: [sugProd1, tempProduct2],
    title: "Lined Notebook Black Marble ",
    price: "18.89",
    productType: "Dot Grit Notebooks",
    category: "Note",
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
    images: [meadProd, tempProduct2],
    title: "Recycled Notebook Dark Green",
    price: "10.99",
    productType: "Lined Paper Notebooks",
    category: "Note",
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
    images: [productImage, productImage3],
    title: "Recycled Paper Cover Notebook",
    price: "15.89",
    productType: "Lined Paper Notebooks",
    category: "Note",
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
    images: [tempProduct2, tempProduct2],
    title: "Recycled Lined Notebook Bright Yellow",
    price: "20.89",
    productType: "Dot Grit Notebooks",
    category: "Note",
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
    images: [sugProd1],
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
    images: [sugProd2],
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
    images: [sugProd3],
    title: "Recycled Lined Notebook Bright Yellow",
    price: "20.89",
    subCategory: "A5",
    category: "Note",
    productType: "Lined Paper Notebooks",
    colours: [{ code: "#F6D324", name: "Yellow" }],
  },
];
var suggested_products = [
  {
    id: 1,
    images: [sugProd1],
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
    images: [sugProd2],
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
    images: [sugProd3],
    title: "Recycled Lined Notebook Bright Yellow",
    price: "20.89",
    category: "Note",
    subCategory: "A5",
    productType: "Lined Paper Notebooks",
    colours: [{ code: "#F6D324", name: "Yellow" }],
  },
];

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async (url) => {
    // dispatch({ type: "SET_LOADING" });
    // try {
    //   const res = await axios.get(url);
    //   const products = await res.data;
    //   console.log(products);
    //   console.log("Hello");
      dispatch({ type: "SET_API_DATA", payload: productsDummy });
      dispatch({ type: "SET_SUGGESTED_PRODUCTS", payload: suggested_products})
    // } catch (error) {
    //   dispatch({ type: "API_ERROR" });
    // }
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