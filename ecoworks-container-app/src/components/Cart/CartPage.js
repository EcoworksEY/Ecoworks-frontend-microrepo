import React, { useState } from "react";

import SignInSidebar from "..//SignIn/SignInSidebar";
import TitleText from "..//Common/TitleText";
import Cart from "./Cart";
import OrderPopup from "../Order/OrderPopup";
import orderConfirmed from "../../assets/Navigation/orderConfirmed.svg"
import { useCartContext } from "../../context/CartContext";

const CartPage = () => {
  /* DYNAMIC PRODUCT LIST -> That will updated dynamically */
  const [signInSidebarOpen, setSignInSidebarOpen] = useState(false);
  const [orderPopupVisible, setOrderPopupVisible] = useState(false);
  const { clearCart } = useCartContext();

  const onClickSignIn = () => {
    setSignInSidebarOpen(true);
  };
  const onClickClose = () => {
    setSignInSidebarOpen(false);
  };

  const handleCheckoutClick = () => {
    setOrderPopupVisible(true);
    clearCart();
  };

  return (
    <div>
      <SignInSidebar
        displayed={signInSidebarOpen}
        onClickClose={onClickClose}
      />
      <OrderPopup
        orderPopupVisible={orderPopupVisible}
        title="Order Accepted"
        line1="Thank you for your order!"
        line2="It has been placed successfully!"
        redirectLine="You are now being redirected to the home page"
        redirectRoute="/home"
        image = {orderConfirmed}
      />
      <div className="bg-light-purple-theme py-8 px-11 mt-10">
        <TitleText text="Shopping bag" />
        <Cart
          onClickSignIn={onClickSignIn}
          handleCheckoutClick={handleCheckoutClick}
        />
      </div>
    </div>
  );
};

export default CartPage;
