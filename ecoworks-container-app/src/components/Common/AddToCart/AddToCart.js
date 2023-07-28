import React, { useState, useEffect } from "react";

import Cross from "../../../assets/Navigation/VectorCross.svg";
import ecoworksShoppingBagIcon from "../../../assets/VectorShoppingBag.svg";

import "./AddToCart.css";
import LargeTextDark from "../LargeTextDark";
import MediumTextDarkHeavy from "../MediumTextDarkHeavy";
import AddToCartProduct from "./AddToCartProduct";
import PopupCheckoutButton from "./PopupCheckoutButton";
import { useCartContext } from "../../../context/CartContext";
import ButtonTextOnly from "../../Product/Button/ButtonTextOnly";

import { useNavigate } from "react-router-dom";

// WILL TAKE PROPS.TYPE as an inpuit and have button type based on that

//EXPECTED PROPS -->
// type="icon" id = {product.id} quantity = {1} selectedColour = {product.colours[0]} product={product}
const AddToCart = (props) => {
  const navigate = useNavigate();
  const { cart, removeItem, addToCart } = useCartContext();

  const [visible, setVisible] = useState(false);
  const handlePopupClose = () => {
    setVisible(false);
  };

  const handlePopupOpen = () => {
    addToCart(props.id, props.selectedColour, props.quantity, props.product);
    // if (props.wishlistId){
    //   props.handleDelete();
    // }
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
    }, 8000);
  };
  const [subTotal, setSubTotal] = useState(0);
  useEffect(() => {
    let product;
    let totalProductPrice = 0;
    for (product of cart) {
      totalProductPrice += Number(product.quantity * product.price);
    }
    setSubTotal(totalProductPrice.toFixed(2));
  }, [cart]);

  const onClickDelete = (id) => {
    removeItem(id);
  };
  const handleCheckoutButtonClick = () => {
    navigate("/cart");
    setVisible(false);
  };

  let loadingData = "";
  if (props.type === "icon") {
    loadingData = (
      <img
        className="product_icon_shopping_bag"
        src={ecoworksShoppingBagIcon}
        alt=""
        onClick={() => handlePopupOpen()}
      />
    );
  } else if (props.type === "button_dark") {
    loadingData = (
      <div className="add_to_bag_button" onClick={() => handlePopupOpen()}>
        ADD TO BAG
      </div>
    );
  } else if (props.type === "button_light") {
    loadingData = (
      <div onClick={() => handlePopupOpen()}>
        <ButtonTextOnly title={"ADD TO BAG"} />
      </div>
    );
  } else if (props.type === "button_dark_small") {
    loadingData = (
      <div
        className="suggested_product_add_to_bag_button"
        onClick={() => handlePopupOpen()}
      >
        ADD TO BAG
      </div>
    );
  }

  return (
    <div>
      {loadingData}
      <div className={`${visible ? "cart_popup_container" : "closed"}`}>
        <div className="flex justify-between">
          <LargeTextDark text="Shopping Cart" />
          <img
            className="cursor-pointer"
            src={Cross}
            alt=""
            onClick={() => handlePopupClose()}
          ></img>
        </div>
        {cart.map((data, index) => (
          <AddToCartProduct
            key={index}
            id={data.id}
            image={data.image}
            title={data.title}
            price={data.price}
            category={data.category}
            colours={data.colours}
            quantity={data.quantity}
            selectedColour={data.selectedColour}
            onClickDelete={onClickDelete}
            productId={data.productId}
          />
        ))}
        <div className="flex justify-between mt-2 mb-2">
          <MediumTextDarkHeavy text="Subtotal" />
          <MediumTextDarkHeavy text={"$" + subTotal} />
        </div>
        <div className="cart_popup_line"></div>
        <PopupCheckoutButton
          handleCheckoutButtonClick={handleCheckoutButtonClick}
        />
      </div>
    </div>
  );
};

export default AddToCart;