import React from "react";
import TitleTextHeavy from "../Common/TitleTextHeavy";
import MediumTextLight from "../Common/MediumTextLight";

import ButtonDark from "../Common/ButtonDark";
import ButtonLight from "../Common/ButtonLight";
import { useNavigate } from "react-router-dom";

import { useUserContext } from "../../context/UserContext";

const AccountBanner = (props) => {
  const {user} = useUserContext();

  const onButtonClick = props.onClickSignIn;
  const navigate = useNavigate();
  const navigateToSignUp = () => {
    navigate("/signup");
  } 


  return (
    <div className="bg-primary-grey my-6 px-10 py-7">
      <div className="flex justify-between">
        <div className={`${user!=="" ? "closed" : ""}`}>
          <TitleTextHeavy text="Stay Connected" />
          <MediumTextLight text="Create an account and get exclusive sales access," />
          <MediumTextLight text="birthday discounts and more." />
        </div>
        <div className={`${user!=="" ? "closed" : ""}`}>
          <ButtonDark onButtonClick={navigateToSignUp} text="Create Account" />
          <ButtonLight onButtonClick={onButtonClick} text="Sign In" />
        </div>
        <div className={`${user!=="" ? "" : "closed"}`}>
          <TitleTextHeavy text="Signed In" />
          <MediumTextLight text="Make the most of your exclusive sales access," />
          <MediumTextLight text="birthday discounts and more." />
        </div>
      </div>
    </div>
  );
};

export default AccountBanner;
