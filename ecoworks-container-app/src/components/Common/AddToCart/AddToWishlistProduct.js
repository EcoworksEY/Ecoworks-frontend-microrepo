import React from "react";
import Bin from "../../../assets/VectorBin.svg";
import { useNavigate } from "react-router-dom";
import AddToCart from "./AddToCart";

const AddToWishlistProduct = (props) => {
  const navigate = useNavigate();
  const navigateToProduct = () => {
    navigate(`/products/${props.productId}`);
  };

  const handleDelete = () => {
    props.onClickDelete(props.id);
    props.setWishlistDisplayed(false)
  }
  return (
    <div>
      <div className="flex">
        <img
          className="cart_popup_image_container"
          src={props.images[0]}
          onClick={() => navigateToProduct()}
          alt=""
        />
        <div className="cart_popup_product_right">
          <div
            className="cart_popup_product_name border border-primary-theme cursor-pointer rounded-2xl align-middle"
            onClick={() => navigateToProduct()}
          >
            <p className="mx-2">{props.title}</p>
          </div>
          <div className="flex justify-between">
            <p className="cart_popup_product_text_container">
              {props.category}
            </p>
            <p className="cart_popup_product_text_container">
              {props.selectedColour.name}
            </p>
          </div>
          <div className="flex justify-between">
            <p className="cart_popup_product_text_container">
              Qty {props.quantity}
            </p>
            <img
              className="cart_popup_product_text_container cursor-pointer"
              src={Bin}
              alt="Bin"
              onClick={() => props.onClickDelete(props.id)}
            />
          </div>
          <div className="flex justify-between">
            <p className="cart_popup_product_price">{"$" + props.price}</p>
            <AddToCart
              type="icon"
              id={props.productId}
              quantity={props.quantity}
              selectedColour={props.selectedColour}
              product={props}
              wishlistId={props.id}
              handleDelete={handleDelete}
            />
          </div>
        </div>
      </div>
      <div className="cart_popup_line"></div>
    </div>
  );
};

export default AddToWishlistProduct;
