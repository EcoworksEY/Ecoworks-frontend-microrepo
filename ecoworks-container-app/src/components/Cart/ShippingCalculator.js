import React from "react";
import UpperLargeTextDark from "..//Common/UpperLargeTextDark";
import MediumTextLight from "..//Common/MediumTextLight";
import MediumTextWhite from "..//Common/MediumTextWhite";

import truck from "../../assets/VectorTruck.svg";
import arrow from "../../assets/VectorDownArrow.svg";

const ShippingCalculator = (props) => {
  return (
    <div>
      <div className="flex bg-secondary-dark-theme mt-6 p-0.5 justify-center space-x-2.5">
        <img src={truck} alt="" />
        <UpperLargeTextDark text="shipping calculator" />
      </div>
      <div className="flex">
        <div className="w-2/3 border border-secondary-dark-theme">
          <div className="mx-4 mt-3">
            <MediumTextLight text="Enter your post code to calculate" />

            <div className="flex">
              <div className="my-2 h-14 w-48 px-5  py-4 justify-between border border-secondary-dark-theme flex shadow-inner">
                <MediumTextLight text="Australia" />
                <div className="w-6 h-6 mt-2">
                  <img src={arrow} alt="" />
                </div>
              </div>
              <input
                className="ml-2 my-2 h-14 w-64 px-5 py-4 justify-center border border-secondary-dark-theme mb-3"
                id="postcode"
                type="postcode"
                placeholder="Enter Post code"
              />
              <div
                className="my-2 h-14 w-40 px-5 justify-center border border-secondary-dark-theme bg-black cursor-pointer"
                type="button"
              >
                <MediumTextWhite text="calculate Shipping " />
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/3 border border-secondary-dark-theme pl-12">
          <div className="mt-3">
            <MediumTextLight text="Shipping Options ..." />

            <div className="flex mb-2">
              <input
                defaultChecked
                id="standard-shipping"
                type="radio"
                value="standard-shipping"
                name="shipping-radio"
                className="mt-2 w-5 h-5 text-black focus:ring-black cursor-pointer"
                onClick={(e) => props.updateShippingCost(e)}
              />

              <label name="standard-shipping" className="ml-2 mt-2 smallTextLight">
                Standard Shipping ${props.SHIPPING_PRICE_STANDARD}
              </label>
            </div>
            <div className="flex">
              <input
                id="express-shipping"
                type="radio"
                value="express-shipping"
                name="shipping-radio"
                className="w-5 h-5 text-black focus:ring-black cursor-pointer"
                onClick={(e) => props.updateShippingCost(e)}
              />
              <label name="express-shipping" className="ml-2 smallTextLight">
                Express Shipping ${props.SHIPPING_PRICE_EXPRESS}
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingCalculator;
