import React, { useState } from "react";
import "./Product.css";
import { useNavigate } from "react-router-dom";

import AddToCart from "../Common/AddToCart/AddToCart";
import AddToWishlist from "../Common/AddToCart/AddToWishlist";

export default function Product(props) {
  const [selectedColour, setselectedColour] = useState(props.colours[0]);

  const navigate = useNavigate();
  const navigateToProduct = () => {
    navigate(`/products/${props.id}`);
  };

  return (
    <div className="product_products_page">
      <div className="product_image_container_products_page">
        <img
          className="product_image_products_page"
          src={props.images[0]}
          alt=""
          onClick={navigateToProduct}
        />
        <img
          className="product_image_hover_products_page"
          src={props.images[1]}
          alt=""
          onClick={navigateToProduct}
        />
      </div>

      <p
        className="product_title_text_products_page"
        onClick={navigateToProduct}
      >
        {props.title}
      </p>
      <div className="product_line_products_page">
        <div className="products_sub_category_container">
          <p className="product_title_text_products_page">
            {props.subCategory}
          </p>
          <div className={`${ props.productTypeSelectedVisible ? "product_type_container" : "closed"}`}>
            {props.productType}
          </div>
        </div>
        <AddToWishlist  
          type="icon"
          id={props.id}
          quantity={1}
          selectedColour={selectedColour}
          product={props} />
        {/* <img
          className="product_icon_new_arrivals_products_page"
          src={ecoworksFavouriteIcon}
          alt=""
        /> */}
      </div>
      <p className="product_price_text_products_page">${props.price}</p>
      <div className="product_line_last_products_page">
        <div className="product_colours_container_products_page">
          {props.colours.map((data, index) => (
            <div
              key={index}
              className={
                selectedColour === data
                  ? "product_colour_selected_circle_products_page"
                  : ""
              }
            >
              <div
                className={
                  selectedColour === data
                    ? "product_colour_circle_products_page selected_products_page"
                    : "product_colour_circle_products_page"
                }
                style={{ backgroundColor: data.code }}
                onClick={() => setselectedColour(data)}
              ></div>
            </div>
          ))}
        </div>
        <AddToCart
          type="button_light"
          id={props.id}
          quantity={1}
          selectedColour={selectedColour}
          product={props}
        />
      </div>
    </div>
  );
}
