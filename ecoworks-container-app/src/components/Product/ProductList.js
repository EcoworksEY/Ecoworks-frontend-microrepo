import React, { useState } from "react";
import "./ProductList.css";
import Product from "./Product";
import NoteProductTypeIcons from "./NoteProductTypeIcons";
import NavIcons from "./NavIcons";
import FilterSidebar from "./FilterSidebar/FilterSidebar";

import { useProductContext } from "../../context/ProductContext";
import { useProductFilterContext } from "../../context/ProductFilterContext";

export default function ProductList(props) {
  const [filterBarVisible, setFilterBarVisible] = useState(false);

  const {products} = useProductContext();
  const {filters} = useProductFilterContext();
  let productTypeSelectedVisible = false;
  if (filters.productType.length > 0){
    productTypeSelectedVisible = true;
    console.log(productTypeSelectedVisible)
  }

  const handleFilterClick = () => {
    setFilterBarVisible(true);
  };
  const handleFilterClose = () => {
    setFilterBarVisible(false);
  };


  return (
    <div>
      <NoteProductTypeIcons productTypeSelected={filters.productType}/>
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
            subCategory = {data.subCategory}
            productType = {data.productType}
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
