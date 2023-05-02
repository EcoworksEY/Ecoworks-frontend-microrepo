import React from 'react'
import "./ProductSection.css"
import ProductList from './ProductList'

export default function ProductsSection(props){
    return(
        <div>
            <h1 className = "product_header" >Things You Might Like</h1>
            <div className='product_box'>
                <ProductList />
            </div>
        </div>
    )
}