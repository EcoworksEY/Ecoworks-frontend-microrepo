import React from 'react'
import "./Text.css";

const MediumTextDark = (props) => {
    return (
        <p className={`${props.underline ? "mediumTextDark underline": "mediumTextDark"}`}>{props.text}</p>
    )
}

export default MediumTextDark;