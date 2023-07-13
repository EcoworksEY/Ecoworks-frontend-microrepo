import React from "react";
import "./ShippingBar.css";

const ShippingBar = (props) => {
  const barFillWidth = (props.totalPrice/props.FREE_STANDARD_SHIPPING_THRESHOLD * 100) + "%";
  return (
    // <div className="rounded-2xl h-2.5 w-11/12 mx-4 mt-2 bg-bar-bg">
    //     <div className={barFillWidth !== "0px" ? `rounded-2xl h-2.5 bg-white w-0` : `rounded-2xl h-2.5 bg-white w-[${barFillWidth}]`}>
    //     </div>
    // </div>
    <div className="bar">
      <div className="chart-bar_inner">
        <div
          className="chart-bar_fill"
          style={{ width: barFillWidth }}
        ></div>
      </div>
    </div>
  );
};

export default ShippingBar;
