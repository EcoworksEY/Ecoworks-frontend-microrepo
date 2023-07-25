import React, { useState } from "react";
import "./ProductList.css";
import Product from "./Product";
import NoteProductTypeIcons from "./NoteProductTypeIcons";
import NavIcons from "./NavIcons";
import FilterSidebar from "./FilterSidebar/FilterSidebar";

import { useProductFilterContext } from "../../context/ProductFilterContext";

export default function ProductList(props) {
  const [filterBarVisible, setFilterBarVisible] = useState(false);
  const scrollDown = () => {
    window.scrollTo({
      left: 0,
      top: 450,
      behavior: "smooth",
    });
  };
  const { all_products, filter_products, isFilterSelected, filters } =
    useProductFilterContext();
  let products;
  if (isFilterSelected) {
    products = filter_products;
    scrollDown();
  } else {
    products = all_products;
  }

  let productTypeSelectedVisible = false;
  if (filters.productType.length > 0) {
    productTypeSelectedVisible = true;
  }

  const handleFilterClick = () => {
    setFilterBarVisible(true);
  };
  const handleFilterClose = () => {
    setFilterBarVisible(false);
  };

  return (
    <div>
      <NoteProductTypeIcons productTypeSelected={filters.productType} />
      <NavIcons handleFilterClick={handleFilterClick} />
      <p className="title_text"> Notebooks for you!</p>
      <div className="container_products">
        {products.map((data, index) => (
          <Product
            key={data.id}
            id={data.id}
            images={data.images}
            title={data.title}
            price={data.price}
            subCategory={data.subCategory}
            productType={data.productType}
            category={data.category}
            colours={data.colours}
            productTypeSelectedVisible={productTypeSelectedVisible}
          />
        ))}
      </div>
      <FilterSidebar
        displayed={filterBarVisible}
        onClickClose={handleFilterClose}
      />
    </div>
  );
}
