import React from "react";
import {useNavigate} from "react-router-dom"

const PopupCheckoutButton = (props) => {
    const navigate = useNavigate();
    const navigateToCart = () => {
        navigate("/cart");
    }

    return (
        <div className = "cart_popup_checkout_button" onClick = {() => navigateToCart()}>
            checkout
        </div>
    )

}

export default PopupCheckoutButton;