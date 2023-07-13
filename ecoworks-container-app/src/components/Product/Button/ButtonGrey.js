import React from "react";
import "./Button.css"

const ButtonGrey = (props) => {
    return (
        <div className={`${props.displayed ? "button_grey" : "button_grey close_object"}`}>{props.content}</div>
    )
}

export default ButtonGrey