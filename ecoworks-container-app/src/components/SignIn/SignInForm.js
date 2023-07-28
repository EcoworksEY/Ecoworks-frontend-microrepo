import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useNavigate } from 'react-router-dom';


import TextInput from "../Common/SignUpForm/TextInput";
import Checkbox from "../Common/SignUpForm/Checkbox";

import ButtonDark from "../Common/SignUpForm/ButtonDark";
import ButtonGrey from "../Common/SignUpForm/ButtonGrey";

import LargeTextDark from "../Common/LargeTextDark";
import MediumTextDark from "../Common/MediumTextDark";

const SignInForm = (props) => {
    const navigate = useNavigate();

    const navigateToSignUp = () => {
        navigate("/signup");
    }

    const onClickForgottenPassword = () => {
        console.log("forgotten")
    }

    const handleSubmit = (event) => {
      console.log(event.target.value)
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
        onSubmit={(values, { setSubmitting }) => {

          setTimeout(() => {
            console.log(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <TextInput name="email" type="email" placeholder="Email Address*" />
          <TextInput name="password" type="text" placeholder="Password*" />
          <div className="signin_remember_me_forgot_container">
            <Checkbox name="acceptRememberMe">Remember Me</Checkbox>
            <div className="forgot_password" onClick = {onClickForgottenPassword}>
                <MediumTextDark className="forgot_password" underline = {true} text = "Forgot Password?"/> 
            </div>
          </div>
          <ButtonDark type="submit" text="Sign In" handleSubmit={handleSubmit}/>
          <ButtonGrey type="submit2" text="Register" handleSubmit = {navigateToSignUp} />
        </Form>
      </Formik>
    </div>
  );
};

export default SignInForm;
