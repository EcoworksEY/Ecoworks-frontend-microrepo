import React from "react";
import "./Button.css";

const ButtonGrey = (props) => {
  return (
    <div
      className={`${
        props.displayed ? "button_grey" : "button_grey close_object"
      }`}
      onClick={() => props.onFiltersClear()}
    >
      {props.content}
    </div>
  );
};

export default ButtonGrey;
