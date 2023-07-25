import React from "react";
import ecoworksFavouriteIcon from "../../../../assets/VectorFavorite.svg";
import "./Product.css";

import AddToCart from "../../../Common/AddToCart/AddToCart";
import AddToWishlist from "../../../Common/AddToCart/AddToWishlist"

import sugProd1 from "../../../../assets/SampleProduct/suggestedProd1.svg";
import { useNavigate } from "react-router-dom";

// INTEGRATION WITH BACKEND
// Suggested Products -> list of popular products ->
const productsList = [
  {
    id: "Product from Main Page Section 1",
    images: [sugProd1],
    title: "Lined Notebook Black Marble ",
    price: "18.89",
    category: "A5",
    colours: [ { code: "#0E2C77", name: "Blue" },
    { code: "#000000", name: "Black" },],
  },
];

export default function Product(props) {
  const navigate = useNavigate();
  const navigateToProduct = (id) => {
    navigate(`/products/${id}`)
  } 
  return (
    <div className="container_product_landing_page">
      {productsList.map((product, index) => 
          <div className="product_landing_page">
            <img className="product_image" src={product.images[0]} alt="" onClick={() => navigateToProduct(product.id)}/>
            <p className="product_text" onClick={() => navigateToProduct(product.id)}>{product.title} </p>
            <div className="product_price">
              <p className="product_price_text">${product.price}</p>
              <div className="product_icons">
                <AddToWishlist type="icon" id = {product.id} quantity = {1} selectedColour = {product.colours[0]} product={product}/>
                <AddToCart type="icon" id = {product.id} quantity = {1} selectedColour = {product.colours[0]} product={product}/>
              </div>
            </div>
          </div>
      )}
    </div>
  );
}
