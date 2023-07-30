import React from "react";
import "./Promotion.css"
import PromoImage from "../../assets/SingleProduct/VectorPromoImage.svg"

export default function Promotion(props) {

    const scrollDown = () => {
        window.scrollTo({
            left: 0,
            top: 800,
            behavior: 'smooth'
        });
    }

    return (
        <div className="promotions">
            <div className="rectangle1">
                <p className="text">Grab Up to 50% Off On Selective Notebook</p>
                <div className="button_promo"  onClick = {scrollDown}>
                    <p className="button_text_promo">Buy Now</p>
                </div>
            </div>
            <div className="rectangle2">
                <img src = {PromoImage} alt=""></img>
            </div>
        </div>
    )
}