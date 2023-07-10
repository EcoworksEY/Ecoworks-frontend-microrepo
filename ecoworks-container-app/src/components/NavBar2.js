import React, { useState } from "react";
import logo from "../assets/logo.svg";
import ecoworksSearchIcon from "../assets/VectorSearch.svg";
import ecoworksFavouriteIcon from "../assets/VectorFavorite.svg";
import ecoworksShoppingBagIcon from "../assets/VectorShoppingBag.svg";
import "./NavBar.css";
import { useNavigate } from "react-router-dom";
import { RxCross1 } from "react-icons/Rx";

import NavBarOption from "./NavBar/NavbarOption";
import menuOptions from "./NavBar/NavbarMenuOptions";

export default function NavBar2(props) {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/home");
  };

  const [expanded, setExpanded] = useState(false);
  const [hovering, setHovering] = useState(false);

  const handleSearchClick = () => {
    console.log("yellow");
    if (expanded) {
      setExpanded(false);
    } else {
      setExpanded(true);
    }
  };

  return (
    <div className={`${hovering ? "navbar2 navbar2_hovering" : "navbar2"}`}>
      <img
        class="ecoworks_logo"
        src={logo}
        alt=""
        onClick={navigateToHome}
      ></img>
      <ul class="ecoworks_menu_options">
        {menuOptions.map((menuOption) => (
          // console.log(menuOption.title)
          <NavBarOption
            key={menuOption.id}
            title={menuOption.title}
            route={menuOption.route}
            navigate={navigate}
            setHovering={setHovering}
            featuredList={menuOption.featuredList}
            typeList={menuOption.typeList}
            image={menuOption.image}
          />
        ))}
      </ul>
      <div class="navbar_menu_options_icons">
        {/* <img class = "navbar_search" src = {ecoworksSearchIcon} alt =""/> */}

        <div className="search-bar">
          {/* <button className= {`search-icon ${expanded ? 'hidden' : ''}`} onClick = {handleSearchClick}>
                            <i className = 'fa fa-search'></i>
                        </button> */}
          <img
            class="navbar_ecoworks_blog_logo"
            src={ecoworksSearchIcon}
            alt=""
            onClick={handleSearchClick}
          />
          <div className="search_bar_flex">
            <input
              className={`search-input ${expanded ? "visible" : ""}`}
              type="text"
              placeholder="Search ... "
            />
            {/* <img className={`cross-icon ${expanded ? 'visible' : ''}`} src = {ecoworksSearchIcon} alt ="" onClick = {handleSearchClick}/> */}
            <RxCross1
              className={`cross-icon ${expanded ? "visible" : ""}`}
              alt=""
              onClick={handleSearchClick}
            />
          </div>
        </div>
        <img
          class="navbar_ecoworks_blog_logo"
          src={ecoworksFavouriteIcon}
          alt=""
        />
        <img
          class="navbar_ecoworks_blog_logo"
          src={ecoworksShoppingBagIcon}
          alt=""
        />
      </div>
    </div>
  );
}
