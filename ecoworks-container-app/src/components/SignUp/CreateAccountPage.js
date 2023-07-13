import React from "react";


import CreateAccountForm from "./CreateAccountForm";
import "./CreateAccount.css"
import TitleText from "..//Common/TitleText";
import SubscribeBanner from "..//Common/SignUpForm/SubscribeBanner";

const CreateAccountPage = () => {
    return (
        <div>
            <div className="margin-left bg-light-purple-theme">
                <TitleText text = "My Acccount" />
                <CreateAccountForm />           
            </div>
            <SubscribeBanner text = {"Get 10% off by subscribing*"}/>
        </div>
    )
}

export default CreateAccountPage;