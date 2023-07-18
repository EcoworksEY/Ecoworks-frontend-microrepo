import React from "react";
import SingleProduct from "./SingleProduct";

import productImage4 from "../../../assets/SampleProduct/mainImage.svg";
import productImage2 from "../../../assets/SampleProduct/Image1.svg";
import productImage3 from "../../../assets/SampleProduct/Image2.svg";
import productImage from "../../../assets/SampleProduct/Image3.svg";

import sugProd1 from "../../../assets/SampleProduct/suggestedProd1.svg";
import sugProd2 from "../../../assets/SampleProduct/suggestedProd2.svg";
import sugProd3 from "../../../assets/tempProduct2.svg";
import NavBar1 from "../../NavBar/NavBar1";
import NavBar2 from "../../NavBar/NavBar2";
import Footer from "../../Footer/Footer";

const SingleProductPage = (props) => {
  
  // INTEGRATION WITH BACKEND
  // Route ->  /products/:id
  // MAKE A CALL TO THE BACKEND USING THE params.id

  let id = "ProductId";
  let category = "Note";
  let subcategory = "Lined Paper Notebooks";
  let title = "Recycled Paper Cover Notebook";
  let addInfo = "A5";
  let price = "15.89";
  let colours = [
    { code: "#0E2C77", name: "Blue" },
    { code: "#000000", name: "Black" },
    { code: "#B8B3B3", name: "Light Grey" },
    { code: "#304043", name: "Dark Grey" },
  ];
  let images = [
    productImage,
    productImage2,
    productImage3,
    productImage4,
  ];
  let suggestedProducts = [
    {
      image: sugProd1,
      title: "Lined Notebook Black Marble ",
      price: "18.89",
      category: "A5",
      colors: ["#000000", "#6C6940"],
    },
    {
      image: sugProd2,
      title: "M16 Ballpoint Pen Refill",
      price: "15.99",
      category: "F,M,B",
      colors: ["#1881E0", "#2B292A"],
    },
    {
      image: sugProd3,
      title: "Recycled Lined Notebook Bright Yellow",
      price: "20.89",
      category: "A5",
      colors: ["#F6D324"],
    },
  ];

  return (
    <div>
      <NavBar1 />
      <NavBar2 />
      <SingleProduct
        id={id}
        category={category}
        subCategory={subcategory}
        title={title}
        addInfo={addInfo}
        price={price}
        colours={colours}
        images={images}
        suggestedProducts={suggestedProducts}
      />
      <Footer />
    </div>
  );
};

export default SingleProductPage;
