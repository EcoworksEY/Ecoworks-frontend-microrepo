import React from "react";

import TitleText from "../Common/TitleText";
import SubscribeBanner from "../Common/SignUpForm/SubscribeBanner";
import SignInForm from "./SignInForm"

const SignInPage = () => {
    return (
        <div className="account_container">
            <div className="margin-left_account bg-light-purple-theme text-center">
                <TitleText text = "Log into your account" />
                <div className="signin_page_form_container">
                    <SignInForm /> 
                </div>      
            </div>
            <SubscribeBanner text = {"Make the Most of your account by subscribing to our newsletter"}/>
        </div>
    )
}

export default SignInPage;