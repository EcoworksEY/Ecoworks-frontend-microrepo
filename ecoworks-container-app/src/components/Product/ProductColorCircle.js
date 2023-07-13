import React from 'react';
import "./Product.css";

export default function ProductColorCircle (props) {
    return (
        <div className='product_colour_circle' style={{'background-color' : props.color}} >
        </div>
    )
}