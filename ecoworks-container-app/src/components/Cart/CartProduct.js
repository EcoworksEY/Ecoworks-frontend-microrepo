import React, { useState } from "react";

import UpperSmallTextDark from "../Common/UpperSmallTextDark";
import SmallTextLight from "../Common/SmallTextLight";
import MediumTextDark from "../Common/MediumTextDark";
import LargeTextDark from "../Common/LargeTextDark";
import {useCartContext} from "../../context/CartContext"

import "./CartProduct.css";

import {useNavigate} from 'react-router-dom';


import minus from "../../assets/VectorMinus.svg";
import plus from "../../assets/VectorPlus.svg";
import bin from "../../assets/VectorBin.svg";

const CartProduct = (props) => {
  const [selectedColour, setselectedColour] = useState(props.selectedColour);
  const {setColour} = useCartContext();
  const handleChangeColour = (colour) => {
    console.log(colour)
    setselectedColour(colour);
    setColour(props.id, colour)

  }
  const navigate = useNavigate();
  const navigateToProduct = () => {
    navigate(`/products/${props.id}`)
  }

  return (
    <div>
      <div className="mt-4 flex justify-between">
        <div className="w-1/2 flex">
          
          <img
            className="w-40 h-52"
            src={props.image}
            alt={props.title}
          ></img>
          <div className="mt-20">
            <div className="border border-primary-theme cursor-pointer rounded-2xl align-middle hover:border-2" onClick = {navigateToProduct}>
              <div className="mx-2">
                <UpperSmallTextDark text={props.title} />
              </div>
            </div>
            <div className="flex mx-2 mt-2">
              <div className="flex my-2">
                <SmallTextLight text="Colour: " />
                &nbsp;
                <SmallTextLight text={selectedColour.name} />
              </div>

              <div className="single_product_colour_boxes_container_cart">
                {props.colours.map((colourCode, index) => (
                  <div
                    key = {index}
                    className={`${
                      selectedColour.code === colourCode.code
                        ? "single_product_selected_colour_box_cart"
                        : ""
                    }`}
                  >
                    <div
                      key={index}
                      className=
                        {`${selectedColour.code === colourCode.code
                          ? "single_product_colour_box_cart selected_square_cart"
                          : "single_product_colour_box_cart"}`}
                      style={{ "backgroundColor": colourCode.code }}
                      onClick={() => handleChangeColour(colourCode)}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
          <div className="flex justify-between w-1/2">
            <div className="flex w-11/12 justify-center items-center ">
              <div>
                <LargeTextDark text={"$" + props.price} />
              </div>
              <div className="mx-14 quantity_box_cart -my-2">
                <img
                  className="bg-light-purple-theme opacity-50"
                  src={minus}
                  alt=""
                  style={{ cursor: "pointer" }}
                  onClick={(e) => props.decreaseQuantity(e, props.id)}
                />
                <MediumTextDark text={props.quantity} />
                <img
                  className="bg-light-purple-theme opacity-50"
                  src={plus}
                  alt=""
                  style={{ cursor: "pointer" }}
                  onClick={(e) => props.increaseQuantity(e, props.id)}
                />
              </div>
              <LargeTextDark text={"$" + Number(props.price*props.quantity).toFixed(2)} />              
            </div>
            <img
              className="w-1/12 cursor-pointer"
              src={bin}
              alt="delete"
              onClick={() => props.onClickDelete(props.id)}
            ></img>
          </div>
        </div>
      <div className="border border-rgba(184, 179, 179, 0.82)"></div>
    </div>
  );
};

export default CartProduct;
