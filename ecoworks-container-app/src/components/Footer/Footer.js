import React, { useState } from "react";
import "./Footer.css";
import paymentMethods from "../../assets/VectorPaymentMethod.svg";
import socialMediaIcons from "../../assets/VectorSocials.svg";
import { useNavigate } from "react-router-dom";

export default function Footer(props) {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  let message =
    "Your email has successfully been added to Ecoworks Mailing list";
  const handleSubmit = (e) => {
    e.preventDefault();
    setVisible(true);
    setEmail("");
    setTimeout(() => {
      setVisible(false);
    }, 4000);
  };
  const handleChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value)
  }

  const navigateToTerms = () => {
    navigate("/terms-and-conditions");
  };
  const navigateToPrivacy = () => {
    navigate("/privacy");
  };

  return (
    <div>
      <div className="footer_sign_up_background">
        <div className="footer_sign_up">
          <div className="footer_join_conversation">
            <p className="footer_join_conversation_text">
              JOIN THE CONVERSATION
            </p>
          </div>
          <div className="footer_stay">
            <p className="footer_join_conversation_text">STAY IN THE KNOW</p>
            <div className="footer_email">
              <form onSubmit = {handleSubmit}>
                <input
                  className="email_input"
                  type="text"
                  placeholder="Enter Your Email Address"
                  value ={email}
                  onChange={(e) => handleChange(e)}
                  required
                />
                <input
                  className="email_submit"
                  type="submit"
                //   onSubmit={(e) => handleSubmit(e)}
                />
              </form>
            </div>
          </div>
        </div>
        <div className="footer_sign_up2">
          <img
            className="footer_social_icons"
            src={socialMediaIcons}
            alt=""
          ></img>
          <div className="footer_view_terms">
            <p>View our</p>
            &nbsp;
            <p
              className="footer_view_terms_links"
              onClick={() => navigateToTerms()}
            >
              Terms & Conditions
            </p>
            &nbsp;
            <p>&</p>
            &nbsp;
            <p
              className="footer_view_terms_links"
              onClick={() => navigateToPrivacy()}
            >
              Privacy Policy.
            </p>
          </div>
        </div>
        <p className={`${visible ? "email_added_message" : "closed"}`}>
          {message}
        </p>
      </div>
      <div className="flex">
        <div className="footer_difference">
          <h1 className="footer_difference_title">
            MAKE A DIFFERENCE WITH SUSTAINABLE STATIONARY
          </h1>
          <br></br>
          <p className="footer_difference_text">
            At Ecoworks, we make it easy for you to make sustainable choices
            with style remains. From recycled notebooks to refillable pens, our
            eco-friendly products are designed to inspire creativity while
            reducing your environmental impact.
          </p>
        </div>
        <div className="footer_menu_options">
          <div className="footer_menu_options_titles_box">
            <div className="footer_menu_option_title">HELP</div>
            <div className="footer_menu_option_title">ABOUT</div>
            <div className="footer_menu_option_title">CONTACT</div>
          </div>
          <div className="footer_menu_options_titles_box">
            <ul className="footer_menu_option_text">
              <li>FAQs</li>
              <li onClick={() => navigateToTerms()}>Delivery</li>
              <li onClick={() => navigateToTerms()}>Returns</li>
              <li onClick={() => navigateToTerms()}>Planner Warranty</li>
              <li onClick={() => navigateToTerms()}>Terms and Conditions</li>
            </ul>
            <ul className="footer_menu_option_text">
              <li>Join Our Team</li>
              <li>Our Story</li>
              <li>Reward Program</li>
              <li>Blog</li>
            </ul>
            <ul className="footer_menu_option_text">
              <li>Email Us</li>
              <li>Phone Us</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer_grey">
        <p> © 2023 Ecoworks All Rights Reserved </p>
        <div className="flex">
          <p>Site Map </p>
          <p>|</p>
          <p> Privacy Policy </p>
          <p>|</p>
          <p> Terms & Conditions </p>
          <p>|</p>
        </div>

        <img src={paymentMethods} alt=""></img>
      </div>
    </div>
  );
}
