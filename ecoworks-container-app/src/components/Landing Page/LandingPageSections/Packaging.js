import React from "react";
import "./Packaging.css"
import packaging from "../../../assets/VectorPackaging.svg"

export default function Packaging(props) {
    return (
        <div className="packaging_container">
            <img className ="packaging_image" src = {packaging} alt=""></img>
            <div className="packaging_text">
                <p className="packaging_title_font">Eco-friendly packaging</p>
                <p className="packaging_text_font">We are proud to let you know that we prioritize sustainability in all aspects of our business, especially in our packaging. We use composable and recycled materials to ensure that your orders not only arrive in perfect condition but also have a positive impact on the environment. Shop with us and make a conscious choice to reduce waste and support a greener future.</p>
            </div>
        </div>
    )
}