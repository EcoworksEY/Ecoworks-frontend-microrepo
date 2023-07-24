import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { CartProvider } from "./context/CartContext";
import App from "./App";

import reportWebVitals from "./reportWebVitals";
import { ProductProvider } from "./context/ProductContext";
import { ProductFilterContextProvider } from "./context/ProductFilterContext";
import { WishlistProvider } from "./context/WishlistContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ProductProvider>
    <ProductFilterContextProvider>
      <CartProvider>
        <WishlistProvider>
        <App />
        </WishlistProvider>
      </CartProvider>
    </ProductFilterContextProvider>
  </ProductProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
