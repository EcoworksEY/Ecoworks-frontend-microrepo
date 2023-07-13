import React from "react";
import "./Text.css"

const LargeTextDarkThin = (props) => {
    return<p className={`${props.centered ? "largeTextDarkThin text_centered" : "largeTextDarkThin"}`}>{props.content}</p>
}

export default LargeTextDarkThin; 