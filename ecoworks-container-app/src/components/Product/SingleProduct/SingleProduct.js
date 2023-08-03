import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./SingleProduct.css";
import minus from "../../../assets/Navigation/VectorMinus.svg";
import plus from "../../../assets/Navigation/VectorPlus.svg";
import arrow from "../../../assets/Navigation/VectorArrowMainSection.svg";
import buyNowIcon from "../../../assets/SingleProduct/VectorBuyNow.svg";
import afterpayLogo from "../../../assets/SingleProduct/VectorAfterPay.svg";
import KlarnaIcon from "../../../assets/SingleProduct/VectorKlarna.svg";
import infoIcon from "../../../assets/SingleProduct/VectorInfoIcon.svg";
import returnsIcon from "../../../assets/SingleProduct/VectorReturnsIcon.svg";

import SuggestedProductList from "./SuggestedProductsList";
import Description from "./Description";
import AddToCart from "../../Common/AddToCart/AddToCart";
import AddToWishlist from "../../Common/AddToCart/AddToWishlist";

import {useProductFilterContext} from "../../../context/ProductFilterContext"

export default function SingleProduct(props) {
  const navigate = useNavigate();
  const { updateFilterValue } = useProductFilterContext();

  const navigateToHome = () => {
    navigate("/home");
  };
  const navigateToProducts = () => {
    navigate("/notes");
  };
  const handleProductType = (productType) => {
    updateFilterValue("productType", [productType]);
    navigateToProducts();
  } 

  const [selectedColour, setselectedColour] = useState(props.colours[0]);
  const [quantity, setQuantity] = useState(1);
  const [mainImageIndex, setMainImageIndex] = useState(0);
  const [mainImage, setMainImage] = useState(props.images[mainImageIndex]);
  useEffect(() => {
    setMainImage(props.images[mainImageIndex]);
    setselectedColour(props.colours[0]);
    setQuantity(1);
  }, [props]);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleImageClick = (index) => {
    setMainImageIndex(index);
    setMainImage(props.images[index]);
  };

  const handleRightClick = () => {
    if (props.images.length - 1 > mainImageIndex) {
      let new_index = mainImageIndex + 1;
      setMainImageIndex(new_index);
      setMainImage(props.images[new_index]);
    }
  };

  const handleLeftClick = () => {
    if (mainImageIndex > 0 && props.images.length > 1) {
      let new_index = mainImageIndex - 1;
      setMainImageIndex(new_index);
      setMainImage(props.images[new_index]);
    }
  };
  

  return (
    <div>
      <div className="single_product_categories_text_group">
        <p
          className="single_product_categories_text"
          onClick={() => navigateToHome()}
        >
          Home |
        </p>
        &nbsp;
        <p
          className="single_product_categories_text"
          onClick={() => navigateToProducts()}
        >
          {" "}
          {props.category} |{" "}
        </p>
        &nbsp;
        <p className="single_product_categories_text" onClick={() => handleProductType(props.productType)}>{props.productType}</p>
      </div>
      <div className="single_product_container">
        <div className="left_container">
          <div className="images_container">
            <div className="single_products_images_boxes">
              {props.images.map((image, index) => (
                <img
                  className="single_product_images_box"
                  key={image}
                  src={image}
                  alt=""
                  onClick={() => handleImageClick(index)}
                ></img>
              ))}
            </div>
            <div className="single_product_main_image_container">
              <img
                className={
                  mainImageIndex === 0
                    ? "single_product_left_arrow arrow_hidden"
                    : "single_product_left_arrow"
                }
                src={arrow}
                alt=""
                onClick={handleLeftClick}
              ></img>
              <img
                className="single_prduct_main_image"
                src={mainImage}
                alt=""
              ></img>
              <img
                className={
                  mainImageIndex === props.images.length - 1
                    ? "single_product_right_arrow arrow_hidden"
                    : "single_product_right_arrow"
                }
                src={arrow}
                alt=""
                onClick={handleRightClick}
              ></img>
            </div>
          </div>

          <div className="single_product_image_underline"></div>
          <SuggestedProductList
            suggestedProductsList={props.suggestedProducts}
          />
        </div>
        <div className="description_container">
          <p className="single_product_name">{props.title}</p>
          <p className="single_product_add_context">{props.subCategory}</p>
          <p className="single_product_name">${props.price}</p>
          <p className="single_product_colour_text">
            Colour: {selectedColour.name}
          </p>

          <div className="single_product_colour_boxes_container">
            {props.colours.map((colourCode, index) => (
              <div
                key={colourCode.code}
                className={
                  selectedColour === colourCode
                    ? "single_product_selected_colour_box"
                    : ""
                }
              >
                <div
                  className={
                    selectedColour === colourCode
                      ? "single_product_colour_box selected_square"
                      : "single_product_colour_box"
                  }
                  style={{ backgroundColor: colourCode.code }}
                  onClick={() => setselectedColour(colourCode)}
                ></div>
              </div>
            ))}
          </div>
          <div className="quantity_wishlist_container">
            <div className="quantity_box">
              <img
                src={minus}
                alt=""
                style={{ cursor: "pointer" }}
                onClick={handleDecrease}
              />
              <p className="quantity_text">QTY: {quantity}</p>
              <img
                src={plus}
                alt=""
                style={{ cursor: "pointer" }}
                onClick={handleIncrease}
              />
            </div>
            <div className="wishlist_container">
              <p className="wishlist_text">Wishlist </p>
              &nbsp; &nbsp;
              <AddToWishlist
                type="icon"
                id={props.id}
                quantity={quantity}
                selectedColour={selectedColour}
                product={props}
              />
            </div>
          </div>
          <AddToCart
            type="button_dark"
            id={props.id}
            quantity={quantity}
            selectedColour={selectedColour}
            product={props}
          />
          <Description />
          <div className="single_product_general_button">
            <p></p>
            <p className="single_product_general_button_text description">
              features
            </p>
            <img className="arrow_icon" src={arrow} alt=""></img>
          </div>
          <div className="single_product_general_button">
            <p></p>
            <p className="single_product_general_button_text description">
              kindness to planet
            </p>
            <img className="arrow_icon" src={arrow} alt=""></img>
          </div>
          <div className="buy_now_pay_later_info">
            <div className="buy_now_text">
              <img src={buyNowIcon} alt=""></img>
              Buy Now, pay later with
              <img src={afterpayLogo} alt=""></img>
              <img src={KlarnaIcon} alt=""></img>
            </div>
            <div className="buy_now_icon">
              <img src={infoIcon} alt=""></img>
            </div>
          </div>
          <div className="buy_now_pay_later_line" />
          <div className="buy_now_pay_later_info">
            <div className="returns_text">
              <img
                className="single_return_icon"
                src={returnsIcon}
                alt=""
              ></img>
              30 days Returns
            </div>
            <div className="buy_now_icon">
              <img src={infoIcon} alt=""></img>
            </div>
          </div>
          <div className="buy_now_pay_later_line" />
        </div>
      </div>
    </div>
  );
}
