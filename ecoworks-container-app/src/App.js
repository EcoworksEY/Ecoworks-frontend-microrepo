import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import ScrollToTop from "./ScrollToTop";

import NavBar1 from "./components/NavBar/NavBar1";
import NavBar2 from "./components/NavBar/NavBar2";
import Footer from "./components/Footer/Footer";

import LandingPage from "./components/Landing Page/LandingPage";
import ProductListPage from "./components/Product/ProductListPage";
import CartPage from "./components/Cart/CartPage";
import CreateAccountPage from "./components/SignUp/CreateAccountPage";
import SignInPage from "./components/SignIn/SignInPage";
import SingleProductPage from "./components/Product/SingleProduct/SingleProductPage";

const App = (props) => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <NavBar1 />
        <NavBar2 />
        <Routes>
          <Route exact path="/home" element={<LandingPage />} />
          <Route exact path="/products/write" element={<p>WRITE</p>} />
          <Route exact path="/products/notes" />
          <Route exact path="/products/plan" />
          <Route exact path="/products/supplies" />
          <Route exact path="/products/carry" />
          <Route exact path="/products/refills" />
          <Route exact path="/products/sale" />
          <Route exact path="/sigin" />
          <Route exact path="/blogs" />
          <Route exact path="/cart" element={<CartPage />} />
          <Route exact path="/signup" element={<CreateAccountPage />} />
          <Route exact path="/signin" element={<SignInPage />} />
          <Route exact path="/products" element={<ProductListPage />} />
          <Route exact path="/products/:id" element={<SingleProductPage />} />
        </Routes>
        <Footer />
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default App;
