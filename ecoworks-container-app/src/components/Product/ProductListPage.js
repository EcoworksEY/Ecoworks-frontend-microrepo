import React, {useRef} from "react";
import Promotion from "./Promotion";

import ProductList from "./ProductList";
import NavBar1 from "../NavBar/NavBar1";
import NavBar2 from "../NavBar/NavBar2";
import Footer from "../Footer/Footer";

const ProductListPage = (props) => {
    const ref = useRef(null);
    return (
        <div>
            <NavBar1 />
            <NavBar2 />
            <Promotion/>
            <ProductList/>
            <Footer />
        </div>
        )
}

export default ProductListPage;