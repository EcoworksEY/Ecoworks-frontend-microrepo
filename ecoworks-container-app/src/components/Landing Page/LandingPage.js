import React from 'react';
import MainSection from './LandingPageSections/MainSection/MainSection';
import ProductsSection from './LandingPageSections/ProductSection/ProductsSection';
import Packaging from './LandingPageSections/Packaging';
import Rewards from './LandingPageSections/Rewards';
import NewArrivals from './LandingPageSections/NewArrivals/NewArrivals';

export default function LandingPage(props) {
    return (
        <div>
            <MainSection/>
            <ProductsSection />
            <Rewards />
            <NewArrivals />
            <Packaging />
        </div>
    );
  }