import React, { useState } from "react";
import "./SuggestedProducts.css";
import ecoworksFavouriteIcon from "../../../assets/VectorFavorite.svg";

const SuggestedProduct = (props) => {
    const [selectedColour, setselectedColour] = useState(props.suggestedProduct.colours[0]);

    return (
        <div className='suggested_product'>
            <img className='suggested_product_image' src = {props.suggestedProduct.image} alt=''/>
            <p className='suggested_product_title'>{props.suggestedProduct.title}</p>
            <img className='suggested_product_favourite_icon' src = {ecoworksFavouriteIcon} alt='' />
            <p className='suggested_product_category_text'>{props.suggestedProduct.category}</p>
            <p className='suggsted_product_price_text'>${props.suggestedProduct.price}</p>
            <div className = 'product_colours_container'>
                {props.suggestedProduct.colours.map ((data, index) => ( 
                    <div className={selectedColour === data ? 'product_colour_selected_circle' : ''}>
                        <div className={selectedColour === data ? 'product_colour_circle selected' : 'product_colour_circle'} style={{'background-color' : data}} onClick={() => setselectedColour(data)}>
                        </div>
                    </div>
                ))}
            </div>
            <div className='suggested_product_add_to_bag_button'>ADD TO BAG</div>
        </div> 
    )
}


export default SuggestedProduct;