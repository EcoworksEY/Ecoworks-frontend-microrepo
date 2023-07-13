import React from "react";

import "./Account.css";

const ButtonDark = (props) => {
  return (
    <button
      className="checkoutButton"
      type="submit"
      onClick={(e) => props.handleSubmit(e)}
    >
      {props.text}
    </button>
  );
};

export default ButtonDark;
