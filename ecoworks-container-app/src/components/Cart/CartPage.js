import React, { useState } from "react";

import SignInSidebar from "..//SignIn/SignInSidebar";
import TitleText from "..//Common/TitleText";
import Cart from "./Cart";

import NavBar1 from "../NavBar/NavBar1";
import NavBar2 from "../NavBar/NavBar2";
import Footer from "../Footer/Footer";


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
      <NavBar1 />
      <NavBar2 />
      <SignInSidebar displayed={signInSidebarOpen} onClickClose = {onClickClose} />
      <div className="bg-light-purple-theme py-8 px-11">
        <TitleText text="Shopping bag" />
        <Cart onClickSignIn={onClickSignIn} />
      </div>
      <Footer />
    </div>
  );
};

export default CartPage;
