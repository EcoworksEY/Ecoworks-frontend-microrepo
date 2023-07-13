import React from 'react';
import NavBar1 from '../NavBar/NavBar1';
import NavBar2 from '../NavBar/NavBar2';
import MainSection from './LandingPageSections/MainSection/MainSection';
import ProductsSection from './LandingPageSections/ProductSection/ProductsSection';
import Footer from '../Footer/Footer';
import Packaging from './LandingPageSections/Packaging';
import Rewards from './LandingPageSections/Rewards';
import NewArrivals from './LandingPageSections/NewArrivals/NewArrivals';

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