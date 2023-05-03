import React from 'react';
import logo from "../assets/logo.svg"
import ecoworksSearchIcon from "../assets/VectorSearch.svg"
import ecoworksFavouriteIcon from "../assets/VectorFavorite.svg"
import ecoworksShoppingBagIcon from "../assets/VectorShoppingBag.svg"
import "./NavBar.css"
import { useNavigate } from 'react-router-dom';



export default function NavBar2 (props) {
    const navigate = useNavigate();

    const navigateToWrite = () => {
        navigate("/products/write");
    }
    const navigateToNote = () => {
        navigate("/products/note");
    }
    const navigateToPlan = () => {
        navigate("/products/plan");
    }
    const navigateToSupplies = () => {
        navigate("/products/supplies");
    }
    const navigateToCarry = () => {
        navigate("/products/carry");
    }
    const navigateToRefills = () => {
        navigate("/products/refills");
    }
    const navigateToSale = () => {
        navigate("/products/sale");
    }
    const navigateToHome = () => {
        navigate ("/home");
    }
    
    return (
            <div class = "navbar">
                <img class = "ecoworks_logo" src = {logo} alt = "" onClick = {navigateToHome}></img>
                <ul class = "ecoworks_menu_options">
                    <li className='ecoworks_menu_options_text' onClick = {navigateToWrite}>Write</li>
                    <li className='ecoworks_menu_options_text' onClick = {navigateToNote}>Note</li>
                    <li className='ecoworks_menu_options_text' onClick = {navigateToPlan}>Plan</li>
                    <li className='ecoworks_menu_options_text' onClick = {navigateToSupplies}>Art Supplies</li>
                    <li className='ecoworks_menu_options_text' onClick = {navigateToCarry}>Carry</li>
                    <li className='ecoworks_menu_options_text' onClick = {navigateToRefills}>Refills</li>
                    <li className='ecoworks_menu_options_text' onClick = {navigateToSale}>Sale</li>
                </ul>
                <div class = "navbar_menu_options_icons">
                    <img class = "navbar_search" src = {ecoworksSearchIcon} alt =""/>
                    <img class = "navbar_ecoworks_blog_logo" src = {ecoworksFavouriteIcon} alt =""/>
                    <img class = "navbar_ecoworks_blog_logo" src = {ecoworksShoppingBagIcon} alt =""/>
                </div>
            </div>     
    )
}