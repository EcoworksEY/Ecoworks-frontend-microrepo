import React from 'react';
import ecoworksFavouriteIcon from "../../../../assets/VectorFavorite.svg"
import ecoworksShoppingBagIcon from "../../../../assets/VectorShoppingBag.svg"
import tempProduct from "../../../../assets/tempProduct.svg"
import "../ProductSection/Product.css"

export default function NewArrivalsProduct1(props) {
        return(
                <div className='product'>
                    <img className='new_arrivals_image' src = {tempProduct} alt=''/>
                    <p className='new_arrivals_text'>{props.name}</p>
                    <div className='product_price_new_arrivals'>
                        <p className='product_price_text'>${props.price}</p>
                        <div className='product_icons_new_arrivals'>
                            <img className='product_icon_new_arrivals' src = {ecoworksFavouriteIcon} alt='' />
                            <img className='product_icon_new_arrivals' src = {ecoworksShoppingBagIcon} alt='' />
                        </div>
                    </div>
                </div> 
)}