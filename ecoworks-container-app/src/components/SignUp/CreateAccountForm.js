import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import MediumTextDarkHeavy from "..//Common/MediumTextDarkHeavy";
import LargeTextDark from "..//Common/LargeTextDark";

import TextInput from "..//Common/SignUpForm/TextInput";
import Checkbox from "..//Common/SignUpForm/Checkbox";
import CheckboxRight from "..//Common/SignUpForm/CheckboxRight";
import ButtonDark from "..//Common/SignUpForm/ButtonDark";

// And now we can use these
const CreateAccountForm = () => {
  const getCharacterValidationError = (str) => {
    return `Your password must have at least 1 ${str} character`;
  };
  const handleSubmit = (event) => {
    console.log(event.target.value)
  }

  return (
    <div className="create_an_account_container">
      <div className="text_align_center">
        <MediumTextDarkHeavy text="Create an Account" />
      </div>
      <LargeTextDark text="Welcome to Ecoworks, let us keep you posted!" />
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          password: "",
          confirmPassword: "",
          email: "",
          confirmEmail: "",
          acceptedTerms: false, // added for our checkbox
          birthday: "",
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required*"),
          lastName: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required*"),
          password: Yup.string()
            .required("No password provided.")
            .min(8, "Password is too short - should be 8 chars minimum.")
            .matches(/[0-9]/, getCharacterValidationError("digit"))
            .matches(/[a-z]/, getCharacterValidationError("lowercase"))
            .matches(/[A-Z]/, getCharacterValidationError("uppercase")),
          confirmPassword: Yup.string()
            .required("Please re-type your password")
            // use oneOf to match one of the values inside the array.
            // use "ref" to get the value of passwrod.
            .oneOf([Yup.ref("password")], "Passwords does not match"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          confirmEmail: Yup.string()
            .required("Please confirm your email address")
            .oneOf([Yup.ref("email")], "Email does not match"),
          acceptedTerms: Yup.boolean()
            .required("Required")
            .oneOf([true], "You must accept the terms and conditions."),
          birthday: Yup.date()
            .required("Not Provided")
            .typeError("please enter a valid date"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <div className="form_container">
            <TextInput
              name="firstName"
              type="text"
              placeholder="First Name*"
            />
            <TextInput name="password" type="text" placeholder="Password*" />
            <TextInput name="lastName" type="text" placeholder="Last Name*" />
            <TextInput
              name="confirmPassword"
              type="text"
              placeholder="Confirm Password*"
            />
          </div>
          <div className="form_container">
            <div>
              <TextInput
                name="email"
                type="email"
                placeholder="Email Address*"
              />
              <TextInput
                name="confirmEmail"
                type="email"
                placeholder="Confirm Email Address*"
              />
              <TextInput
                name="birthday"
                id="birthday"
                type="text"
                placeholder="Birthday (dd/mm)*"
              />
            </div>
            <div className="checkbox_container">
              <Checkbox name="acceptedTermsEcoWorksMember">
                Sign me to be a Ecoworks member and receive a welcome voucher,
                birthday voucher and exclusive offers.
              </Checkbox>
              <Checkbox name="acceptedTermsNewsLetter">
                {<p>I accept the {<u>Terms & Conditions</u>} signing up to the newsletter.</p>}
              </Checkbox>
              <Checkbox name="acceptedTerms">
                {<p>I accept the {<u>Terms & Conditions</u>} for creating an account.</p>}
              </Checkbox>
            </div>
          </div>
          <div className="form_container">
            <CheckboxRight name="acceptRememberMe" >Remember Me</CheckboxRight>

            {/* <button className = "checkoutButton"type="submit" onClick={(e) => handleSubmit(e)}>Create Account</button> */}
            <ButtonDark type= "submit" className = "checkoutButton2" text = "Create Account" handleSubmit = {handleSubmit}/>
          </div>
          
        </Form>
      </Formik>
    </div>
  );
};

export default CreateAccountForm;
