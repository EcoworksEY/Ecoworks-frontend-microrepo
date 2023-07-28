import React, { useEffect, useState } from "react";
import ProductSummary from "./ProductSummary";
import OrderSummary from "./OrderSummary";

import { useCartContext } from "../../context/CartContext";
import OrderPopup from "../Order/OrderPopup";

// import productImage from "../../assets/SampleProduct/Image3.svg";
// import productImage3 from "../../assets/SampleProduct/Image2.svg";

// import sugProd1 from "../../assets/SampleProduct/suggestedProd1.svg";
// import meadProd from "../../assets/SampleProduct/meadProd.svg";

const SHIPPING_PRICE_STANDARD = 9;
const SHIPPING_PRICE_EXPRESS = 15;
const FREE_STANDARD_SHIPPING_THRESHOLD = 50;

const Cart = (props) => {
  const { cart, removeItem, setDecrease, setIncrement } = useCartContext();

  const [shippingPrice, setShippingPrice] = useState(SHIPPING_PRICE_STANDARD);

  const [productsList, setProductsList] = useState(cart);

  const [subTotal, setSubTotal] = useState(0);
  useEffect(() => {
    let product;
    let totalProductPrice = 0;
    for (product of productsList) {
      totalProductPrice += Number(product.quantity * product.price);
      if (totalProductPrice >= FREE_STANDARD_SHIPPING_THRESHOLD)
        setShippingPrice(0);
    }
    setSubTotal(totalProductPrice);
  }, [productsList]);

  const increaseQuantity = (e, id) => {
    setIncrement(id);
    updateQuantity("Increase", id);
  };

  const decreaseQuantity = (e, id) => {
    setDecrease(id);
    updateQuantity("Decrease", id);
  };

  const updateQuantity = (quanType, id) => {
    if (quanType === "Increase") {
      const currentProductIndex = productsList.findIndex(
        (prod) => prod.id === id
      );
      const updatedProductQuantity = {
        ...productsList[currentProductIndex],
        quantity:
          Number(productsList.find((product) => product.id === id).quantity) +
          1,
      };
      setNewProductsList(currentProductIndex, updatedProductQuantity);
    } else if (
      quanType === "Decrease" &&
      productsList.find((product) => product.id === id).quantity > 1
    ) {
      const currentProductIndex = productsList.findIndex(
        (prod) => prod.id === id
      );
      const updatedProductQuantity = {
        ...productsList[currentProductIndex],
        quantity:
          Number(productsList.find((product) => product.id === id).quantity) -
          1,
      };
      setNewProductsList(currentProductIndex, updatedProductQuantity);
    }
  };
  const setNewProductsList = (currentProductIndex, updatedProductQuantity) => {
    const newProductsList = [...productsList];
    newProductsList[currentProductIndex] = updatedProductQuantity;
    setProductsList(newProductsList);
  };
  const onClickDelete = (id) => {
    removeItem(id);
    setProductsList(productsList.filter((prod) => prod.id !== id));
  };
  const updateShippingCost = (e) => {
    if (e.target.value === "express-shipping" && e.target.checked === true) {
      setShippingPrice(SHIPPING_PRICE_EXPRESS);
    } else if (
      e.target.value === "standard-shipping" &&
      e.target.checked === true
    ) {
      console.log(e);
      setShippingPrice(SHIPPING_PRICE_STANDARD);
    }
  };

  return (
    <div>
      <div className="my-5 flex">
        <ProductSummary
          productsList={productsList}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
          updateShippingCost={updateShippingCost}
          onClickDelete={onClickDelete}
          onClickSignIn={props.onClickSignIn}
          SHIPPING_PRICE_STANDARD={SHIPPING_PRICE_STANDARD}
          SHIPPING_PRICE_EXPRESS={SHIPPING_PRICE_EXPRESS}
        />
        <OrderSummary
          productsList={productsList}
          totalProductPrice={subTotal}
          shippingPrice={shippingPrice}
          FREE_STANDARD_SHIPPING_THRESHOLD={FREE_STANDARD_SHIPPING_THRESHOLD}
          handleCheckoutClick = {props.handleCheckoutClick}
        />
      </div>
    </div>
  );
};

export default Cart;