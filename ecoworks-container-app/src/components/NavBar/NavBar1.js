import React from 'react';
import ecoworksBlogIcon from "../../assets/VectorblogIcon.svg"
import ecoworksSignInIcon from "../../assets/VectorsignInIcon.svg"
import "./NavBar.css"
import { useNavigate } from 'react-router-dom';

export default function NavBar1 (props) {
    const navigate = useNavigate();

    const navigateToSignIn = () => {
        navigate("/signin");
    }
    const navigateToBlogs = () => {
        navigate("/blogs");
    }

    return (
        <div className="navbar">
            <div className = "navbar_rectangle1">
                <p className = "navbar_message">Free Shipping on Orders Over $50*</p>
            </div>
            <div className = "navbar_icons_top_layer">
                <div className = "options" onClick = {navigateToBlogs}>
                    <img className = "navbar_ecoworks_blog_logo" src = {ecoworksBlogIcon} alt =""/>
                    <p className = "navbar_ecoworks_blog">ECOWORKS BLOG</p>
                </div>
                <div className='options' onClick = {navigateToSignIn}>
                    <img className = "navbar_ecoworks_blog_logo" src = {ecoworksSignInIcon} alt =""/>
                    <p className = "navbar_ecoworks_blog">SIGN IN</p>
                </div>
            </div>
        </div>
    )
}