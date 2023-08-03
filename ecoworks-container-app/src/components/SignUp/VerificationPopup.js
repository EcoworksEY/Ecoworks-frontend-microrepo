import React, { useState } from "react";
import emailSent from "../../assets/Navigation/EmailSent.svg";
import verificatonComplete from "../../assets/Navigation/verificationComplete.svg";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextInput from "..//Common/SignUpForm/TextInput";

import TitleTextHeavy from "../Common/TitleTextHeavy";
import OrderPopup from "../Order/OrderPopup";
import ButtonDark from "..//Common/SignUpForm/ButtonDark";
import { useUserContext } from "../../context/UserContext";



let message = "";
const VerificationPopup = (props) => {
  const {verifyEmail} = useUserContext();
  const [errorMessageVisible, setErrorMessageVisible] = useState(false);
  const [orderPopupVisible, setOrderPopupVisible] = useState(false);


  const handleSubmit = () => {
    console.log("Verifying");
  };

  return (
    <div
      className={`${
        props.verificationVisible ? "absolute mb-5 z-10 mx-5 flex w-3/5 justify-center bg-white border rounded-lg" : "closed"
      }`}
    >
      <OrderPopup
        orderPopupVisible={orderPopupVisible}
        title="Verification Successful"
        line1="Thank you for creating an account with us"
        line2="It has been created successfully!"
        redirectLine="You are now being redirected to the Signin"
        redirectRoute="/signin"
        image = {verificatonComplete}
      />
      <div className="w-2/5 mt-5 text-center">
        <img src={emailSent} alt="Email Sent"></img>
        <div className="my-4">
          <TitleTextHeavy text="We have sent you an email" />
          <p>Please verify the code we have sent to you in an email ... </p>
          <Formik
          initialValues={{
            verificationCode: "",
          }}
          validationSchema={Yup.object({
            verificationCode: Yup.string()
            .required("Reduired* ")})}

          onSubmit={(values, { setSubmitting }) => {
            setTimeout(async () => {
              message = await verifyEmail(props.username, values.verificationCode);
              if (message === "Email verification successful. You can now log in."){
                setOrderPopupVisible(true);
              } else {
                setErrorMessageVisible(true);
              }
              setSubmitting(false);
            }, 400);
          }}
        >
          <Form>
              <TextInput
                name="verificationCode"
                type="text"
                placeholder="Verification Code*"
              />
              <ButtonDark
                type="submit"
                className="checkoutButton2"
                text="Verify"
                handleSubmit={handleSubmit}
              />
            <p
              className={`${
                errorMessageVisible ? "text-red-400 mt-2" : "closed"
              }`}
            >
              {message}
            </p>
          </Form>
        </Formik>
        </div>
      </div>
    </div>
  );
};

export default VerificationPopup;
