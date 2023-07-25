import React from "react";

const PopupCheckoutButton = (props) => {
    return (
        <div className = "cart_popup_checkout_button" onClick = {() => props.handleCheckoutButtonClick()}>
            checkout
        </div>
    )

}

export default PopupCheckoutButton;