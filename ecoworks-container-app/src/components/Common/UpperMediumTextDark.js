import React from 'react'
import "./Text.css";

const UpperMediumTextDark = (props) => {
    return (
        <div className={`upperMediumTextDark ${props.subscribeBanner ? "py-2 bg-secondary-dark-theme w-full h-10 text-center" : ""}`}>{props.text}</div>
    )
}

export default UpperMediumTextDark;