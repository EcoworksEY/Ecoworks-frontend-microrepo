import React from "react";

import { MediumTextDarkVHeavy } from "./Typography/MediumTextDarkVHeavy";
import { MediumTextDark } from "./Typography/MediumTextDark";

import "./NavBarSubMenu.css";

const NavBarSubMenu = (props) => {
  return (
    <div className="navbar_sub_container">
        <div className="nav_bar_featured">
            <MediumTextDarkVHeavy content="Featured" />
            {props.featuredList.map((features) => <MediumTextDark content = {features} />)}
        </div>
        <div className="nav_bar_featured">
            <MediumTextDarkVHeavy content="Type" />
            {props.typeList.map((types) => <MediumTextDark content = {types} />)}
        </div>
        <div className="navbar_sub_menu_image">
        <img src={props.image} alt="" />
      </div>
    </div>
  );
};

export default NavBarSubMenu;
