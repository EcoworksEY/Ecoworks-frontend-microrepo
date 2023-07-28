import React, { useEffect } from "react";
import SingleProduct from "./SingleProduct";

import { useProductContext } from "../../../context/ProductContext";
import { useParams } from "react-router-dom";
import Loading from "../../Common/Loading/Loading";

const SingleProductPage = (props) => {
  const { singleProduct, suggestedProducts, getSingleProduct } = useProductContext();
  let { id } = useParams();

  useEffect(() => {
    getSingleProduct(Number(id));
  }, [id]);

  let productData = "";
  let pageData = <div className="loading_container_single_product"><Loading /></div>;
  if (singleProduct.length > 0) {
    productData = singleProduct[0];
    pageData = (
      <SingleProduct
        id={productData.id}
        category={productData.category}
        subCategory={productData.subCategory}
        productType={productData.productType}
        title={productData.title}
        addInfo={productData.addInfo}
        price={productData.price}
        colours={productData.colours}
        images={productData.images}
        suggestedProducts={suggestedProducts}
      />
    );
  }
  return <div>{pageData}</div>;
};

export default SingleProductPage;
