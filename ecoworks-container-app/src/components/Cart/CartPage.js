import React, { useState } from "react";

import SignInSidebar from "..//SignIn/SignInSidebar";
import TitleText from "..//Common/TitleText";
import Cart from "./Cart";


const CartPage = () => {
  /* DYNAMIC PRODUCT LIST -> That will updated dynamically */
  const [signInSidebarOpen, setSignInSidebarOpen] = useState(false);
  
  const onClickSignIn = () => {
    setSignInSidebarOpen(true);
    console.log("SignIn");
  };
  const onClickClose = () => {
    setSignInSidebarOpen(false);
    console.log("closed");
  };

  return (
    <div>
      <SignInSidebar displayed={signInSidebarOpen} onClickClose = {onClickClose} />
      <div className="bg-light-purple-theme py-8 px-11 mt-10">
        <TitleText text="Shopping bag" />
        <Cart onClickSignIn={onClickSignIn} />
      </div>
      
    </div>
  );
};

export default CartPage;
