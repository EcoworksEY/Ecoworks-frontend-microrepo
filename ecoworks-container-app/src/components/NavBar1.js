import React from 'react';
import ecoworksBlogIcon from "../assets/VectorblogIcon.svg"
import ecoworksSignInIcon from "../assets/VectorsignInIcon.svg"
import "./NavBar.css"

export default function NavBar1 (props) {
    return (
        <div className="navbar">
            <div class = "navbar_rectangle1">
                <p class = "navbar_message">Free Shipping on Orders Over $50*</p>
            </div>
            <div class = "navbar_icons_top_layer">
                <img class = "navbar_ecoworks_blog_logo" src = {ecoworksBlogIcon} alt =""/>
                <p class = "navbar_ecoworks_blog">ECOWORKS BLOG</p>
                <img class = "navbar_ecoworks_blog_logo" src = {ecoworksSignInIcon} alt =""/>
                <p class = "navbar_ecoworks_blog">SIGN IN</p>
            </div>
        </div>
    )
}