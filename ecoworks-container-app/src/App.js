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
import BlogsPage from "./components/MiscPages/Blogs/BlogsPage";
import TermsPage from "./components/MiscPages/Terms/TermsPage";
import PrivacyPage from "./components/MiscPages/Privacy/PrivacyPage";
import NotFoundPage from "./components/MiscPages/NotFound/404";
import WelcomeBackMessage from "./components/Common/WelcomeBackMessage";

const App = (props) => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <NavBar1 />
        <NavBar2 />
        <WelcomeBackMessage />
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
          <Route exact path="/blogs" element={<BlogsPage />}/>
          <Route exact path="/cart" element={<CartPage />} />
          <Route exact path="/signup" element={<CreateAccountPage />} />
          <Route exact path="/signin" element={<SignInPage />} />
          <Route exact path="/notes" element={<ProductListPage />} />
          <Route path="/products/:id" element={<SingleProductPage />} />
          <Route exact path ="/terms-and-conditions" element={<TermsPage />} />
          <Route exact path ="/privacy" element={<PrivacyPage />} />
          <Route path ="/*" element = {<NotFoundPage />} />
        </Routes>
        <Footer />
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default App;
