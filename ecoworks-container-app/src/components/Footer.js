import React from "react";
import "./Footer.css";
import paymentMethods from "../assets/VectorPaymentMethod.svg"
import socialMediaIcons from "../assets/VectorSocials.svg"

// import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';

export default function Footer (props) {
    return (
        <div>
            <div className="footer_sign_up_background">
                <div class = "footer_sign_up">
                    <div className="footer_join_conversation">
                        <p className="footer_join_conversation_text">JOIN THE CONVERSATION</p>   
                    </div>
                    <div className="footer_stay">
                        <p className="footer_join_conversation_text">STAY IN THE KNOW</p>
                    </div>
                    {/* <Form>
                    <Row className="align-items-center">
                        <Col sm={3} className="my-1">
                        <Form.Label htmlFor="inlineFormInputName" visuallyHidden>
                            Name
                        </Form.Label>
                        <Form.Control id="inlineFormInputName" placeholder="Jane Doe" />
                        </Col>
                        <Col xs="auto" className="my-1">
                        <Button type="submit">Submit</Button>
                        </Col>
                    </Row>
                    </Form> */}
                </div>
                <div class = "footer_sign_up2">
                    <img className="footer_social_icons" src = {socialMediaIcons} alt=""></img>
                    <p className="footer_view_terms">View our Terms & Conditions & Privacy Policy.</p>
                </div>
            </div>
            <div class="flex">
                <div className="footer_difference">
                    <h1 className="footer_difference_title">MAKE A DIFFERENCE WITH SUSTAINABLE STATIONARY</h1>
                    <br></br>
                    <p className="footer_difference_text">At Ecoworks, we make it easy for you to make sustainable choices with style remains. From recycled notebooks to refillable pens, our eco-friendly products are designed to inspire creativity while reducing your environmental impact.</p>
                </div>
                <div className="footer_menu_options">
                    <div className = "footer_menu_options_titles_box">
                        <div className="footer_menu_option_title">
                            HELP
                        </div>
                        <div className="footer_menu_option_title">
                            ABOUT
                        </div>
                        <div className="footer_menu_option_title">
                            CONTACT
                        </div>
                    </div>
                    <div className = "footer_menu_options_titles_box">
                        <ul className="footer_menu_option_text">
                            <li>FAQs</li>
                            <li>Delivery</li>
                            <li>Returns</li>
                            <li>Planner Warranty</li>
                            <li>Terms and Conditions</li>
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

            <div className= "footer_grey">
                <p> © 2023 Ecoworks All Rights Reserved </p>
                <div class = "flex">
                    <p>Site Map </p>
                    <p>|</p>
                    <p> Privacy Policy </p>
                    <p>|</p>
                    <p> Terms & Conditions </p>
                    <p>|</p>
                </div>
                
                <img src = {paymentMethods} alt=""></img>
            </div>
        </div>
        
    )
}