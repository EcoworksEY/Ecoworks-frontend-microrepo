import React from "react";
import UpperMediumTextDark from "./UpperMediumTextDark"

const ButtonDark = (props) => {
    return (
        <div className = "w-52 h-12 bg-secondary-dark-theme text-center py-3 cursor-pointer" onClick={() => props.onButtonClick()}>
            <UpperMediumTextDark text ={props.text}/>
        </div>
    )
}

export default ButtonDark;