import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import LandingPage from './components/Landing Page/LandingPage';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <BrowserRouter>
    {/* <NavBar1 />
    <NavBar2 /> */}
    <Routes>
      <Route exact path = "/home" element = {<LandingPage />} />
      <Route exact path="/products/write" element = {<p>WRITE</p>} />
      <Route exact path="/products/notes" />
      <Route exact path="/products/plan" />
      <Route exact path="/products/supplies" />
      <Route exact path="/products/carry" />
      <Route exact path="/products/refills" />
      <Route exact path="/products/sale" />
      <Route exact path="/sigin" />
      <Route exact path="/blogs" />
    </Routes>
    <Routes>

    </Routes>
  </BrowserRouter>
  

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
