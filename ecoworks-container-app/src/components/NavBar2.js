import React from 'react';
import logo from "../assets/logo.svg"
import ecoworksSearchIcon from "../assets/VectorSearch.svg"
import ecoworksFavouriteIcon from "../assets/VectorFavorite.svg"
import ecoworksShoppingBagIcon from "../assets/VectorShoppingBag.svg"
import "./NavBar.css"

export default function NavBar2 (props) {
    return (
            <div class = "navbar">
                <img class = "ecoworks_logo" src = {logo} alt = ""></img>
                <ul class = "ecoworks_menu_options">
                    <li className='ecoworks_menu_options_text'>Write</li>
                    <li className='ecoworks_menu_options_text'>Note</li>
                    <li className='ecoworks_menu_options_text'>Plan</li>
                    <li className='ecoworks_menu_options_text'>Art Supplies</li>
                    <li className='ecoworks_menu_options_text'>Carry</li>
                    <li className='ecoworks_menu_options_text'>Refills</li>
                    <li className='ecoworks_menu_options_text'>Sale</li>
                </ul>
                <div class = "navbar_menu_options_icons">
                    <img class = "navbar_ecoworks_blog_logo" src = {ecoworksSearchIcon} alt =""/>
                    <img class = "navbar_ecoworks_blog_logo" src = {ecoworksFavouriteIcon} alt =""/>
                    <img class = "navbar_ecoworks_blog_logo" src = {ecoworksShoppingBagIcon} alt =""/>
                </div>
            </div>     
    )
}