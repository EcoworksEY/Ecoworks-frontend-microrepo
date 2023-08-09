import React from "react";

import "./FilterSidebar.css";
import Cross from "../../../assets/Navigation/VectorCross.svg";
import ArrowRight from "../../../assets/Navigation/VectorRight.svg";

import LargeTextDarkThin from "../Typography/LargeTextDarkThin";
import ButtonDark from "../Button/ButtonDark";
import FilterSubOptions from "./FilterSubOptions";

const SelectedFilterSidebar = (props) => {
  return (
    <div
      className={`${props.displayed ? "sidebar2" : "sidebar2 sidebar_close"}`}
    >
      <LargeTextDarkThin centered ={true} content={props.filterName} />
      <img
        className="sidebar_cross_button"
        src={Cross}
        alt="Close"
        onClick={() => props.onClickCloseEntireMenu()}
      />
      <img
        className="sidebar_arrow_button"
        src={ArrowRight}
        alt="Close"
        onClick={() => props.closeFilter()}
      />
      <div className="divider_line" />
      {props.filterSubOptions.map((option) => (
        <FilterSubOptions
          key = {option.filterOptionTitle}
          filterOptionTitle={option.filterOptionTitle}
          icon={option.icon}
          onClickFilterSubOption={props.onClickFilterSubOption}
          filterSelected = {props.filterSelected}
          filterName = {props.filterName}
          filterNameContext = {props.filterNameContext}
        />
      ))}
      {/* <div className="filter_buttons_container">
        <ButtonDark content="Apply Filters" />
      </div> */}
    </div>
  );
};

export default SelectedFilterSidebar;