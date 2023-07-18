import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import LandingPage from "./components/Landing Page/LandingPage";
import ProductListPage from "./components/Product/ProductListPage";
import CartPage from "./components/Cart/CartPage";
import CreateAccountPage from "./components/SignUp/CreateAccountPage";
import SignInPage from "./components/SignIn/SignInPage";
import SingleProductPage from "./components/Product/SingleProduct/SingleProductPage";
import ScrollToTop from "./ScrollToTop";

import { CartProvider } from "./context/CartContext";
import App from "./App";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CartProvider>
    <BrowserRouter>
      <ScrollToTop>
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
      </ScrollToTop>
    </BrowserRouter>
  </CartProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
