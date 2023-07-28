import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../ProductSection/Product.css"

export default function NewArrivalsProduct2(props) {
        const navigate = useNavigate();
        const navigateToProduct = () => {
            navigate("/notes")
        }
        return(
            <div className='product_new_arrivals_2' onClick = {() => navigateToProduct()}>
                <img className='new_arrivals2_image' src = {props.product.images[0]} alt=''/>
                <p className='new_arrivals_text'>{props.product.title}</p>
                <p className='new_arrivals_text'>SHOP NOW</p>
            </div> 
)}