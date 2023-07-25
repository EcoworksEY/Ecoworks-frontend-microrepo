import React from "react";
import "./Text.css";


export function MediumTextDark(props) {
    return (
        <p className="medium_text_dark" onClick={() => props.handleClick(props.content)}>{props.content}</p>
    )
}
