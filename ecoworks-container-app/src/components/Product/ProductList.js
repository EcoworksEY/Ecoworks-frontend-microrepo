import React, { useState } from "react";
import "./ProductList.css";
import Product from "./Product";
import NoteProductTypeIcons from "./NoteProductTypeIcons";
import NavIcons from "./NavIcons";
import FilterSidebar from "./FilterSidebar/FilterSidebar";

import { useProductContext } from "../../context/ProductContext";

export default function ProductList(props) {
  const [filterBarVisible, setFilterBarVisible] = useState(false);
  const {products} = useProductContext();

  const handleFilterClick = () => {
    setFilterBarVisible(true);
  };
  const handleFilterClose = () => {
    setFilterBarVisible(false);
  };


  return (
    <div>
      <NoteProductTypeIcons />
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
            category={data.category}
            colours={data.colors}
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
