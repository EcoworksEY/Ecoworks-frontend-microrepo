import React from 'react'
import "./SuggestedProducts.css"
import SuggestedProduct from './SuggestedProduct';


const SuggestedProductList = (props) => {
    return (
        <div>
            <p className = "suggested_products_title">YOU MAY ALSO LIKE</p>
            <div className= 'suggested_products_container'>
                {props.suggestedProductsList.map ((suggestedProduct, index) => ( 
                    <SuggestedProduct key= {suggestedProduct.id} suggestedProduct = {suggestedProduct}/>
                ))}
            </div>
        </div>
    )
}

export default SuggestedProductList;