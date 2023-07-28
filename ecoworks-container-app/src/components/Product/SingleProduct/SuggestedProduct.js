import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./SuggestedProducts.css";
// import ecoworksFavouriteIcon from "../../../assets/VectorFavorite.svg";
import AddToWishlist from "../../Common/AddToCart/AddToWishlist";
import AddToCart from "../../Common/AddToCart/AddToCart";

const SuggestedProduct = (props) => {
  const [selectedColour, setselectedColour] = useState(
    props.suggestedProduct.colours[0]
  );
  const navigate = useNavigate();

  const navigateToProduct = () => {
    navigate(`/products/${props.suggestedProduct.id}`);
  };

  return (
    <div className="suggested_product">
      <img
        className="suggested_product_image"
        src={props.suggestedProduct.images[0]}
        alt=""
        onClick={() => navigateToProduct()}
      />
      <p
        className="suggested_product_title"
        onClick={() => navigateToProduct()}
      >
        {props.suggestedProduct.title}
      </p>
      {/* <img
        className="suggested_product_favourite_icon"
        src={ecoworksFavouriteIcon}
        alt=""
      /> */}
      <AddToWishlist
        type="icon_suggested"
        id={props.suggestedProduct.id}
        quantity={1}
        selectedColour={selectedColour}
        product={props.suggestedProduct}
      />
      <p className="suggested_product_category_text">
        {props.suggestedProduct.subCategory}
      </p>
      <p className="suggsted_product_price_text">
        ${props.suggestedProduct.price}
      </p>
      <div className="product_colours_container_products_page">
        {props.suggestedProduct.colours.map((data, index) => (
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
        type="button_dark_small"
        id={props.suggestedProduct.id}
        quantity={1}
        selectedColour={selectedColour}
        product={props.suggestedProduct}
      />
    </div>
  );
};

export default SuggestedProduct;
