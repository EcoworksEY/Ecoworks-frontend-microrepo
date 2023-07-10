import React, {useState} from "react";
import NavBarSubMenu from "../NavBarSubMenu";

const NavBarOption = (props) => {
    const [hovering, setHovering] = useState(false);

    const handleHover = () => {
      setHovering(true);
      props.setHovering(true);
    };
    const handleHoverEnd = () => {
      setHovering(false);
      props.setHovering(false);
    };

  return (
    <div onMouseOver={handleHover} onMouseLeave={handleHoverEnd}>
      <p
        className={`${
          hovering
            ? "hovering_menu_option_text ecoworks_menu_options_text"
            : "ecoworks_menu_options_text"
        }`}
        onClick={() => props.navigate(props.route)}
      >
        {props.title}
      </p>
      <div className={`${hovering ? "hovering_menu_option_rectangle" : ""}`}>
        <div
          className={`${
            hovering ? "hovering_container" : "not_hovering_container"
          }`}
        >
          <NavBarSubMenu featuredList = {props.featuredList} typeList = {props.typeList} image = {props.image}/>
        </div>
      </div>
      <div className={`${hovering ? "hovering_line" : ""}`}></div>
    </div>
  );
};

export default NavBarOption;
