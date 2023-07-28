import React, { useEffect, useState } from "react";
import Loading from "../Common/Loading/Loading";

import "./OrderPopup.css";
import { useNavigate } from "react-router-dom";
import UpperLargeTextDark from "../Common/UpperLargeTextDark";
import MediumTextGrey from "../Common/MediumTextGrey";
import LargeTextDark from "../Common/LargeTextDark";
import TitleTextHeavy from "../Common/TitleTextHeavy";

const OrderPopup = (props) => {
  const [infoToShow, setInfoToShow] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    console.log("HELLOW");
    if (props.orderPopupVisible) {
      setInfoToShow(<Loading />);
      setTimeout(
        () =>
          setInfoToShow(
            <div className="order_accepted_container">
              <TitleTextHeavy text="Order Accepted" />
              <div className="order_additional_text">
                <UpperLargeTextDark text="Thank you for your order!" />
                <LargeTextDark text="It has been placed successfully!" />
                <MediumTextGrey text="You are now being redirected to the home page" />
              </div>
            </div>
          ),
        5000
      );
        setTimeout(() => navigate("/home"), 10000);
    }
  }, [props.orderPopupVisible, navigate]);

  return (
    <div
      className={`${
        props.orderPopupVisible ? "order_popup_container" : "closed"
      }`}
    >
      {/* Order Popped Up */}
      {infoToShow}
    </div>
  );
};

export default OrderPopup;
