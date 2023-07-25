import React from "react";
import Promotion from "./Promotion";

import ProductList from "./ProductList";

const ProductListPage = (props) => {
  return (
    <div>
      <Promotion />
      <ProductList />
    </div>
  );
};

export default ProductListPage;
