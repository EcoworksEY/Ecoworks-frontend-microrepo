import React from "react";
import UpperMediumTextDark from "./UpperMediumTextDark"

const ButtonLight = (props) => {
    return (
        <div className = "mt-1.5 w-52 h-12 text-center py-3 cursor-pointer border border-secondary-dark-theme" onClick = {() => props.onButtonClick()} >
            <UpperMediumTextDark text ={props.text}/>
        </div>
    )
}

export default ButtonLight;