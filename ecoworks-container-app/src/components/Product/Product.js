import React, { useState } from 'react';
import ButtonTextOnly from "./Button/ButtonTextOnly";
import './Product.css'
import ecoworksFavouriteIcon from "../../assets/VectorFavorite.svg"
import {useNavigate} from 'react-router-dom';

export default function Product (props) {
    const [selectedColor, setSelectedColor] = useState(props.colors[0]);
    
    const navigate = useNavigate();
    const navigateToProduct = () => {
        navigate(`/products/${props.id}`)
    }

    
    return (
        <div className='product_products_page'>
            <div className='product_image_container_products_page'>
                <img className = 'product_image_products_page' src = {props.image[0]} alt=''  onClick = {navigateToProduct}/>
                <img className='product_image_hover_products_page' src = {props.image[1]} alt=''  onClick = {navigateToProduct}/>
            </div>
            
            <p className='product_title_text_products_page'  onClick = {navigateToProduct}>{props.title}</p>
            <div className='product_line_products_page'>
                <p className='product_title_text_products_page'>{props.category}</p>
                <img className='product_icon_new_arrivals_products_page' src = {ecoworksFavouriteIcon} alt='' />
            </div>
            <p className='product_price_text_products_page'>${props.price}</p>
            <div className='product_line_last_products_page'>

                <div className = 'product_colours_container_products_page'>
                    {props.colors.map ((data, index) => ( 
                        <div key={index} className={selectedColor === data ? 'product_colour_selected_circle_products_page' : ''}>
                            <div className={selectedColor === data ? 'product_colour_circle_products_page selected_products_page' : 'product_colour_circle_products_page'} style={{'backgroundColor' : data}} onClick={() => setSelectedColor(data)}>
                            </div>
                        </div>
                    ))}
                </div>
                <ButtonTextOnly title = {"ADD TO BAG"}/>
            </div>
        </div> 
    )
}