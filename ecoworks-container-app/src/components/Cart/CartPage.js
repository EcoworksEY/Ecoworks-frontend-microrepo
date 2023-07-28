import React, { useState } from "react";

import SignInSidebar from "..//SignIn/SignInSidebar";
import TitleText from "..//Common/TitleText";
import Cart from "./Cart";
import OrderPopup from "../Order/OrderPopup";
import { useCartContext } from "../../context/CartContext";

const CartPage = () => {
  /* DYNAMIC PRODUCT LIST -> That will updated dynamically */
  const [signInSidebarOpen, setSignInSidebarOpen] = useState(false);
  const [orderPopupVisible, setOrderPopupVisible] = useState(false);
  const { clearCart } = useCartContext();

  const onClickSignIn = () => {
    setSignInSidebarOpen(true);
    console.log("SignIn");
  };
  const onClickClose = () => {
    setSignInSidebarOpen(false);
    console.log("closed");
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
      <OrderPopup orderPopupVisible={orderPopupVisible} />
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
