import React from "react";
import Bin from "../../../assets/Navigation/VectorBin.svg";
import { useNavigate } from "react-router-dom";

const AddToCartProduct = (props) => {
  const navigate = useNavigate();
  const navigateToProduct = () => {
    navigate(`/products/${props.productId}`);
  };
  return (
    <div>
      <div className="flex">
        <img
          className="cart_popup_image_container"
          src={props.image}
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
            <p>Qty {props.quantity}</p>
            <img
              className="cursor-pointer"
              src={Bin}
              alt="Bin"
              onClick={() => props.onClickDelete(props.id)}
            />
          </div>
          <p className="cart_popup_product_price">{"$" + props.price}</p>
        </div>
      </div>
      <div className="cart_popup_line"></div>
    </div>
  );
};

export default AddToCartProduct;
