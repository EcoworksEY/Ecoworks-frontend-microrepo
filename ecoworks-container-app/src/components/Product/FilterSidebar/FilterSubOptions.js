import React from "react";
import LargeTextDarkThin from "../Typography/LargeTextDarkThin";
import Cross from "../../../assets/Navigation/VectorCross.svg";

const FilterSubOptions = (props) => {

  return (
    <div>
      <div
        className={`${
          props.filterSelected.includes(props.filterOptionTitle)
            ? "filter_sub_option_container_selected"
            : "filter_sub_option_container"
        }`}
        name = {props.filterName}
        value = {[]}
        onClick={(e) => props.onClickFilterSubOption(props.filterOptionTitle)}
      >
        <img className = "icon_sub_option" src={props.icon} alt="" />
        <div className="filter_sub_option_text">
          <LargeTextDarkThin content={props.filterOptionTitle} />
        </div>
        <img
        className={`${
          props.filterSelected.includes(props.filterOptionTitle)
            ? "sidebar_sub_option_cross"
            : "closed"
        }`}
        src={Cross}
        alt="Close"
      />
      </div>
      <div className="divider_line_sub_option" />
    </div>
  );
};

export default FilterSubOptions;
