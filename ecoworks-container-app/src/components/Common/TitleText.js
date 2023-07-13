import React from 'react'
import "./Text.css";

const TitleText = (props) => {
    return (
        <p className='titleText'>{props.text}</p>
    )
}

export default TitleText;