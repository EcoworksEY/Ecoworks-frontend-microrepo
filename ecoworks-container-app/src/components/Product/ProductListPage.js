import React from "react";
import Promotion from "./Promotion";

import ProductList from "./ProductList";
import NavBar1 from "../NavBar/NavBar1";
import NavBar2 from "../NavBar/NavBar2";
import Footer from "../Footer/Footer";

const ProductListPage = (props) => {
    return (
        <div>
            
            
            <Promotion/>
            <ProductList/>
            
        </div>
        )
}

export default ProductListPage;