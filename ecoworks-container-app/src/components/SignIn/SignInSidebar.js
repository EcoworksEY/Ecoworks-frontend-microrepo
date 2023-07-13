import React from "react";
import "./SignIn.css";

import Cross from "../../assets/VectorCross.svg"
import SignInForm from "./SignInForm";
    
const SignInSidebar = (props) => {
  return (
    <div className={`${props.displayed ? "sidebar_sign_in" : "sidebar_sign_in sidebar_close_sign_in"}`}>
      <img className= "sidebar_cross_button_sign_in" src = {Cross} alt ="Close" onClick ={() => props.onClickClose()} />
      <div className = "signin_form_container" >
        <SignInForm />
      </div>
    </div>
  )
}

export default SignInSidebar;