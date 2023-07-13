import React from "react";
import UpperMediumTextDark from "../UpperMediumTextDark";

const SubscribeBanner = (props) => {
    return (
        <UpperMediumTextDark text = {props.text} subscribeBanner = {true} />
    )
}

export default SubscribeBanner;