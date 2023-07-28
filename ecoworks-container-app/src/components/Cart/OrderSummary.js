import React, { useState } from "react";

import ShippingBar from "./ShippingBar";

import UpperLargeTextDark from "..//Common/UpperLargeTextDark";
import LargeTextDark from "..//Common/LargeTextDark";
import SmallTextLight from "..//Common/SmallTextLight";
import MediumTextDark from "..//Common/MediumTextDark";
import MediumTextDarkHeavy from "..//Common/MediumTextDarkHeavy";
import LargeTextWhite from "..//Common/LargeTextWhite";
import MediumTextWhite from "..//Common/MediumTextWhite";

import arrow from "../../assets/Navigation/VectorArrow.svg";
import afterpay from "../../assets/Footer/VectorAfterpay.svg";
import info from "../../assets/Footer/VectorInfo.svg";
import truck from "../../assets/Navigation/VectorTruck.svg";

const OrderSummary = (props) => {
  /* DYNAMIC PRODUCT LIST -> That will updated dynamically */
  const [isExpanded, setIsExpanded] = useState(false);
  const [promoCode, setPromoCode]  = useState("");
  const [promoMessage, setPromoMessage] = useState(false);

  const onExpand = () => {
    if (isExpanded) {
      setIsExpanded(false);
    } else if (!isExpanded) {
      setIsExpanded(true);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    setPromoCode(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setPromoMessage(true);
    setPromoCode("");
    setTimeout(() => {
      setPromoMessage(false);
    }, 4000);
  };
  const promoMessageText = "Invalid Promo Code!"

  return (
    <div className="w-1/3 bg-white px-5 py-3.5">
      <div className="text-center my-1">
        <UpperLargeTextDark text="order summary" />
      </div>
      <div className="border border-rgba(184, 179, 179, 0.82)"></div>
      <div className="flex justify-between my-5">
        <LargeTextDark text="subtotal" />
        <LargeTextDark text={"$" + props.totalProductPrice.toFixed(2)} />
      </div>
      <div className="border border-rgba(184, 179, 179, 0.82)"></div>

      <div className="flex justify-between my-5">
        <div>
          <LargeTextDark text="estimated total" />
          <SmallTextLight text="includes delivery" />
        </div>
        <div className="space-y-2 text-right">
          <LargeTextDark
            text={
              "$" +
              Number(props.totalProductPrice + props.shippingPrice).toFixed(2) +
              " AUD"
            }
          />
          <img
            className={
              isExpanded === true ? "transformed_arrow_icon_cart" : "arrow_icon_cart"
            }
            src={arrow}
            alt=""
            onClick={onExpand}
          />
        </div>
      </div>
      <div>
        {isExpanded &&
          (<div>
            {props.productsList.map((data, index) => (
            <div className="expansion_animation flex justify-between">
              <p>{data.title}</p>
              <p>{"$" + data.price + " x " + data.quantity}</p>
            </div>
           ))}
          <div className="flex justify-between">
            <p>Shipping</p>
            <p>{"$" + props.shippingPrice}</p>
          </div>
          </div>)}
      </div>
      <div className="border border-rgba(184, 179, 179, 0.82)"></div>
      <div className="py-8 flex items-center justify-center">
        <SmallTextLight
          text={
            "Or 4 weekly payments of $" +
            Number((props.totalProductPrice + props.shippingPrice) / 4).toFixed(
              2
            ) +
            " with"
          }
        />
        <img className="mx-2 -my-2 cursor-pointer" src={afterpay} alt=""></img>
        <img className="cursor-pointer" src={info} alt=""></img>
      </div>
      <div className="py-3 bg-secondary-dark-theme h-20">
        <div className="flex space-x-1 items-center justify-center">
          <img src={truck} alt=""></img>
          <MediumTextDark text="You're " />
          <MediumTextDarkHeavy
            text={
              "$" +
              Math.max(0, Number(props.FREE_STANDARD_SHIPPING_THRESHOLD - props.totalProductPrice).toFixed(2)) +
              " "
            }
          />
          <MediumTextDark text="off free shipping" />
        </div>
        <ShippingBar totalPrice={props.totalProductPrice} FREE_STANDARD_SHIPPING_THRESHOLD = {props.FREE_STANDARD_SHIPPING_THRESHOLD} />
      </div>
      <div className="text-center mt-8">
        <UpperLargeTextDark text="apply promo code" />
      </div>
      <div className="flex my-2">
        <input
          className="my-2 px-4 h-14 w-2/3 py-4 justify-center border border-secondary-dark-theme"
          id="postcode"
          type="postcode"
          placeholder="Enter Promo Code..."
          value={promoCode}
          onChange={(e) => handleChange(e)}
          required
        />
        <div
          className="my-2 h-14 w-1/3 px-5 justify-center border border-secondary-dark-theme bg-black cursor-pointer"
          type="button"
          onClick = {(e) => handleSubmit(e)}
        >
          <div className="my-3">
            <MediumTextWhite text="Apply" />
          </div>
        </div>
      </div>
      <p className={`${promoMessage ? "promo_message" : "closed"}`}>{promoMessageText}</p>
        <div
          className={`${props.isCartEmpty ? "closed" : "mt-12 h-14 px-5 justify-center border border-secondary-dark-theme bg-black cursor-pointer"}`}
          type="button"
          id="checkout"
          onClick={() => props.handleCheckoutClick()}
        >
          <div className="my-3">
            <LargeTextWhite text="CHECKOUT SECURELY"/>
          </div>
        </div>
      </div>
  );
};

export default OrderSummary;
