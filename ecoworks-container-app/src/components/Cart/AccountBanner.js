import React from "react";
import TitleTextHeavy from "../Common/TitleTextHeavy";
import MediumTextLight from "../Common/MediumTextLight";

import ButtonDark from "../Common/ButtonDark";
import ButtonLight from "../Common/ButtonLight";

const AccountBanner = (props) => {
  const onButtonClick = props.onClickSignIn;
  return (
    <div className="bg-primary-grey my-6 px-10 py-7">
      <div className="flex justify-between">
        <div>
          <TitleTextHeavy text="Stay Connected" />
          <MediumTextLight text="Create an account and get exclusive sales access," />
          <MediumTextLight text="birthday discounts and more." />
        </div>
        <div>
          <ButtonDark text="Create Account" />
          <ButtonLight onButtonClick={onButtonClick} text="Sign In" />
        </div>
      </div>
    </div>
  );
};

export default AccountBanner;