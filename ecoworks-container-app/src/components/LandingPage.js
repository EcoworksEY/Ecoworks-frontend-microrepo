import React from 'react';
import NavBar1 from './NavBar1';
import NavBar2 from './NavBar2';
import MainSection from './MainSection';
import ProductsSection from './ProductsSection';
import Footer from './Footer';
import Packaging from './Packaging';
import Rewards from './Rewards';
import NewArrivals from './NewArrivals';

export default function LandingPage(props) {
    return (
        <div>
            <NavBar1/>
            <NavBar2/>
            <MainSection/>
            <ProductsSection />
            <Rewards />
            <NewArrivals />
            <Packaging />
            <Footer />
        </div>
    );
  }