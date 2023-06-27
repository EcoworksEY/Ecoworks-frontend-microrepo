import React, { useState } from 'react';
import logo from "../assets/logo.svg"
import ecoworksSearchIcon from "../assets/VectorSearch.svg"
import ecoworksFavouriteIcon from "../assets/VectorFavorite.svg"
import ecoworksShoppingBagIcon from "../assets/VectorShoppingBag.svg"
import "./NavBar.css"
import { useNavigate } from 'react-router-dom';
import {RxCross1} from 'react-icons/Rx'



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

    const [expanded, setExpanded] = useState(false);
    
    const handleSearchClick = () => {
        console.log("yellow")
        if (expanded){
            setExpanded(false);
        } else {
            setExpanded(true);
        }        
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
                    {/* <img class = "navbar_search" src = {ecoworksSearchIcon} alt =""/> */}
                   
                    <div className='search-bar'>
                        {/* <button className= {`search-icon ${expanded ? 'hidden' : ''}`} onClick = {handleSearchClick}>
                            <i className = 'fa fa-search'></i>
                        </button> */}
                        <img class = "navbar_ecoworks_blog_logo" src = {ecoworksSearchIcon} alt ="" onClick = {handleSearchClick}/>
                        <div className='search_bar_flex'>
                            <input className={`search-input ${expanded ? 'visible' : ''}`} type='text' placeholder='Search ... ' />
                            {/* <img className={`cross-icon ${expanded ? 'visible' : ''}`} src = {ecoworksSearchIcon} alt ="" onClick = {handleSearchClick}/> */}
                            <RxCross1 className={`cross-icon ${expanded ? 'visible' : ''}`} alt ="" onClick = {handleSearchClick}/>
                        </div>
                    </div>
                    <img class = "navbar_ecoworks_blog_logo" src = {ecoworksFavouriteIcon} alt =""/>
                    <img class = "navbar_ecoworks_blog_logo" src = {ecoworksShoppingBagIcon} alt =""/>
                </div>
            </div>     
    )
}