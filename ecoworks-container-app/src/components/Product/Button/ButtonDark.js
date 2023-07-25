import React from "react";
import "./Button.css"

const ButtonDark = (props) => {
    return (
        <div className="button_dark" onClick = {() => props.handleClick()}>{props.content}</div>
    )
}

export default ButtonDark