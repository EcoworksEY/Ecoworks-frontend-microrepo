import React from "react";
import ecoworksFavouriteIcon from "../../../../assets/VectorFavorite.svg";
import AddToCart from "../../../Common/AddToCart/AddToCart";
import { useNavigate } from "react-router-dom";
import "../ProductSection/Product.css";
import AddToWishlist from "../../../Common/AddToCart/AddToWishlist";

export default function NewArrivalsProduct1(props) {
  const navigate = useNavigate();
  const navigateToProduct = () => {
    navigate(`/products/${props.product.id}`);
  };
  return (
    <div className="product_landing_page">
      <img
        className="new_arrivals_image"
        src={props.product.images[0]}
        alt=""
        onClick={() => navigateToProduct()}
      />
      <p className="new_arrivals_text"  onClick={() => navigateToProduct()} >{props.product.title}</p>
      <div className="product_price_new_arrivals">
        <p className="product_price_text">${props.product.price}</p>
        <div className="product_icons_new_arrivals">
          <AddToWishlist
            type="icon"
            id={props.product.id}
            quantity={1}
            selectedColour={props.product.colours[0]}
            product={props.product}
          />
          <AddToCart
            type="icon"
            id={props.product.id}
            quantity={1}
            selectedColour={props.product.colours[0]}
            product={props.product}
          />
        </div>
      </div>
    </div>
  );
}
