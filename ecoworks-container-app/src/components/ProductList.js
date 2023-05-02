import React from 'react';
import Product from './Product';
import "./ProductList.css";
import SideArrow from '../assets/VectorSideArrow.svg'


export default function ProductList(props) {
    return (
            <div className='product_container'>
                <Product />
                <img className = 'product_icon_arrow' src = {SideArrow} alt=''/>
            </div>
        )
    // )
}