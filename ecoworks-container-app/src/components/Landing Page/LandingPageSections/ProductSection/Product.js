import React from "react";
import "./Product.css";

import AddToCart from "../../../Common/AddToCart/AddToCart";
import AddToWishlist from "../../../Common/AddToCart/AddToWishlist"

import { useNavigate } from "react-router-dom";
import { useProductContext } from "../../../../context/ProductContext";

import Loading from "../../../Common/Loading/Loading"

export default function Product(props) {
  const navigate = useNavigate();
  const navigateToProduct = (id) => {
    navigate(`/products/${id}`)
  }
  const {isLoading, featuredProducts} = useProductContext();
  // const [productData, setProductData] = useState("")

  let productData= <div className="loading_container_main_page"><Loading /></div>;

  if (!isLoading){
    productData = featuredProducts.map((product, index) => 
          <div className="product_landing_page" key = {product.id}>
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
      )
  }



  return (
    <div className="container_product_landing_page">
      {productData}
    </div>
  );
}
