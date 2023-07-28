import React, { useRef, useState } from "react";
import NewArrivalsProduct2 from "./NewArrivalsProduct2";
import SideArrow from "../../../../assets/VectorSideArrow.svg";
import "./NewArrivalsList.css";
import "../ProductSection/Product.css";
import { useProductContext } from "../../../../context/ProductContext";
import Loading from "../../../Common/Loading/Loading";

export default function NewArrivalsList2(props) {
  const ref = useRef(null);
  const { isLoading, newProducts2 } = useProductContext();
  let productData = (
    <div className="loading_container_new_arrivals">
      <Loading />
    </div>
  );
  if (!isLoading) {
    productData = (
      <div className="new_arrivals_container" ref={ref}>
        {newProducts2.map((data, index) => (
          <NewArrivalsProduct2 key={index} product={data} />
        ))}
      </div>
    );
  }
  const [expandedLeft, setexpandedLeft] = useState(false);
  const [expandedRight, setExpandedRight] = useState(true);

  const scrollRight = (scrollOffset) => {
    let previousScroll = ref.current.scrollLeft;
    ref.current.scrollLeft += scrollOffset;
    let currentScroll = ref.current.scrollLeft;

    setexpandedLeft(true);
    if (currentScroll - previousScroll < 49) {
      setExpandedRight(false);
    }
  };
  const scrollLeft = (scrollOffset) => {
    ref.current.scrollLeft -= scrollOffset;
    if (ref.current.scrollLeft === 0) {
      setexpandedLeft(false);
    }
    setExpandedRight(true);
  };

  return (
    <div className="new_arrivals_background">
      <div className="new_arrivals_list1">
        <img
          className={`product_icon_arrow ${expandedLeft ? "visible" : ""}`}
          style={{ rotate: "180deg" }}
          src={SideArrow}
          alt=""
          onClick={() => {
            scrollLeft(360);
          }}
        />
        {productData}
        <img
          className={`product_icon_arrow ${expandedRight ? "visible" : ""}`}
          src={SideArrow}
          alt=""
          onClick={() => {
            scrollRight(360);
          }}
        />
      </div>
    </div>
  );
}
