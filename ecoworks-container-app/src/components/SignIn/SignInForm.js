import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useNavigate } from 'react-router-dom';


import TextInput from "../Common/SignUpForm/TextInput";
import Checkbox from "../Common/SignUpForm/Checkbox";

import ButtonDark from "../Common/SignUpForm/ButtonDark";
import ButtonGrey from "../Common/SignUpForm/ButtonGrey";

import LargeTextDark from "../Common/LargeTextDark";
import MediumTextDark from "../Common/MediumTextDark";
import { useUserContext } from "../../context/UserContext";

let message = "";
const SignInForm = (props) => {
    const {signIn} = useUserContext();
    const [errorMessageVisible, setErrorMessageVisible] = useState(false);
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate();

    const navigateToSignUp = () => {
        navigate("/signup");
    }

    const onClickForgottenPassword = () => {
        console.log("forgotten")
    }

    const handleSubmit = () => {
      console.log("Signing In")
    }

  return (
    <div>
      <LargeTextDark text="Welcome Back!" />
      <Formik
        initialValues={{
          password: "",
          email: "",
        }}
        validationSchema={Yup.object({
          password: Yup.string().required("Required*"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required*"),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {

          setTimeout(async () => {
            setLoading(true);
            message = await signIn((values.email), (values.password));
            setSubmitting(false);
            setLoading(false);
            if (message === "OK") {
              if (props.onSidebar){
                props.onClickClose();
              } else {
                navigate("/home")
              }
            } else {
              setErrorMessageVisible(true)
              setTimeout(() => {setErrorMessageVisible(false)},3000)
            }
          }, 400);
          resetForm();
        }}
      >
        <Form>
          <TextInput name="email" type="email" placeholder="Email Address*" autoComplete="username" />
          <TextInput name="password" type="password" placeholder="Password*" autoComplete="current-password"/>
          <div className="signin_remember_me_forgot_container">
            <Checkbox name="acceptRememberMe">Remember Me</Checkbox>
            <div className="forgot_password" onClick = {onClickForgottenPassword}>
                <MediumTextDark className="forgot_password" underline = {true} text = "Forgot Password?"/> 
            </div>
          </div>
          <p className={`${ errorMessageVisible ? "text-red-400 mt-2" : "closed"}`}>{message}</p>
          <p className={`${ loading ? "mt-2" : "closed"}`}>Signing you In...</p>
          <ButtonDark type="submit" text="Sign In" handleSubmit={handleSubmit}/>
          <ButtonGrey type="submit2" text="Register" handleSubmit = {navigateToSignUp} />
        </Form>
      </Formik>
    </div>
  );
};

export default SignInForm;
