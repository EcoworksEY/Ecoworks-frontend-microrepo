import React from 'react';
import tempProduct from "../assets/tempProduct.svg"
import "./Product.css"

export default function NewArrivalsProduct2(props) {
        return(
            <div className='product'>
                <img className='new_arrivals2_image' src = {tempProduct} alt=''/>
                <p className='new_arrivals_text'>{props.name}</p>
                <p className='new_arrivals_text'>SHOP NOW</p>
            </div> 
)}