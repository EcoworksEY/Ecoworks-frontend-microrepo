import React, { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";

import sugProd1 from "../../../assets/SampleProduct/suggestedProd1.svg";
import sugProd2 from "../../../assets/SampleProduct/suggestedProd2.svg";
import sugProd3 from "../../../assets/tempProduct2.svg";
import { useProductContext } from "../../../context/ProductContext";
import { useParams } from "react-router-dom";

let suggestedProducts = [
  {
    id:1,
    image: sugProd1,
    title: "Lined Notebook Black Marble ",
    price: "18.89",
    category: "A5",
    colours: ["#000000", "#6C6940"],
  },
  {
    id:2,
    image: sugProd2,
    title: "M16 Ballpoint Pen Refill",
    price: "15.99",
    category: "F,M,B",
    colours: ["#1881E0", "#2B292A"],
  },
  {
    id:3,
    image: sugProd3,
    title: "Recycled Lined Notebook Bright Yellow",
    price: "20.89",
    category: "A5",
    colours: ["#F6D324"],
  },
];

const SingleProductPage = (props) => {
  const { singleProduct, getSingleProduct } = useProductContext();
  let { id } = useParams();
  
  useEffect(() => {
    getSingleProduct(Number(id));
  }, [id])

    if (singleProduct.length > 0){
      // setMainImage(singleProduct[0].images[0]);
      // setselectedColour(singleProduct[0].colours[0])
      // console.log(selectedColour)
    }
  let productData = "";
  let pageData = "Loading"
  if (singleProduct.length > 0 ){
    productData = singleProduct[0];
    pageData = 
    <SingleProduct
    id={productData.id}
    category={productData.category}
    subCategory={productData.subCategory}
    productType={productData.productType}
    title={productData.title}
    addInfo={productData.addInfo}
    price={productData.price}
    colours={productData.colours}
    images={productData.images}
    suggestedProducts={suggestedProducts}
  />
  }

  // let id = "ProductId";
  // let category = "Note";
  // let subcategory = "Lined Paper Notebooks";
  // let title = "Recycled Paper Cover Notebook";
  // let addInfo = "A5";
  // let price = "15.89";

  return (
    <div>
      {pageData}
      
      
    </div>
  );
};

export default SingleProductPage;
