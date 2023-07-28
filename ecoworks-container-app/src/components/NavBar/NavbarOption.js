import React, { useState } from "react";
import NavBarSubMenu from "./NavBarSubMenu";
import { useProductFilterContext } from "../../context/ProductFilterContext";

const NavBarOption = (props) => {
  const [hovering, setHovering] = useState(false);
  const { updateFilterValue } = useProductFilterContext();

  const handleHover = () => {
    setHovering(true);
    props.setHovering(true);
  };
  const handleHoverEnd = () => {
    setHovering(false);
    props.setHovering(false);
  };
  const handleClick = () => {
    props.navigate(props.route);
    handleHoverEnd();
  };

  const handleTypeClick = (feature) => {
    updateFilterValue("productType", [feature]);
    props.navigate("/notes");
    handleHoverEnd();
  };

  const handleFeaturesClick = (feature) => {
    props.navigate("/notes");
    handleHoverEnd();
  };

  return (
    <div onMouseOver={handleHover} onMouseLeave={handleHoverEnd}>
      <p
        className={`${
          hovering
            ? "hovering_menu_option_text ecoworks_menu_options_text"
            : "ecoworks_menu_options_text"
        }`}
        onClick={() => handleClick()}
      >
        {props.title}
      </p>
      <div className={`${hovering ? "hovering_menu_option_rectangle" : ""}`}>
        <div
          className={`${
            hovering
              ? "hovering_container_navbar"
              : "not_hovering_container_navbar"
          }`}
        >
          <NavBarSubMenu
            featuredList={props.featuredList}
            typeList={props.typeList}
            image={props.image}
            handleFeaturesClick={handleFeaturesClick}
            handleTypeClick={handleTypeClick}
          />
        </div>
      </div>
      <div className={`${hovering ? "hovering_line" : ""}`}></div>
    </div>
  );
};

export default NavBarOption;
