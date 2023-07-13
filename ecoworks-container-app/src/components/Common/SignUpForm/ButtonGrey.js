import React from "react";

import "./Account.css";

const ButtonGrey = (props) => {
  return (
    <button
      className="checkoutButtonGrey"
      type="submit"
      onClick={(e) => props.handleSubmit(e)}
    >
      {props.text}
    </button>
  );
};

export default ButtonGrey;
