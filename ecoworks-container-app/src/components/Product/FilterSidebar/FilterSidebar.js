import React, { useState } from "react";

import Cross from "../../../assets/Navigation/VectorCross.svg";
import "./FilterSidebar.css";

import LargeTextDarkThin from "../Typography/LargeTextDarkThin";
import FilterOption from "./FilterOptions";
import ButtonDark from "../Button/ButtonDark";
import ButtonGrey from "../Button/ButtonGrey";

import FilterSubOptions from "./FilterSubOptionsData";

const FilterSidebar = (props) => {
  // Maybe - maintain a list of filters here
  // Structure : {colour: [] , ...} and then add and remove from the array

  //if the length of each of the filter type is 0, then isFilterSelected = false
  //
  const [isFilterSelected, setisFilterSelected] = useState(false);

  const onClickCloseEntireMenu = props.onClickClose;
  const onFilterSubOptionClick = (filterId, filterSubOption) => {
    setisFilterSelected(true);
    FilterSubOptions.filter((filter) => filter.id === filterId).filter(
      (subOpt) => 
      {if (subOpt.selected.indexOf(filterSubOption) === -1) {
        subOpt.selected.push(filterSubOption)
      } else {
        return null;
      }}
    );
  };
  const onFiltersClear = () => {
    setisFilterSelected(true);
  };

  return (
    <div className={`${props.displayed ? "sidebar" : "sidebar sidebar_close"}`}>
      <LargeTextDarkThin centered={true} content="Filters" />
      <img
        className="sidebar_cross_button"
        src={Cross}
        alt="Close"
        onClick={() => props.onClickClose()}
      />
      <div className="divider_line" />
      {FilterSubOptions.map((filter) => (
        <FilterOption
          key={filter.id}
          id={filter.id}
          filterName={filter.filter}
          filterNameContext={filter.filterNameContext}
          onClickCloseEntireMenu={onClickCloseEntireMenu}
          filterSubOptions={filter.filterOptions}
          onFilterSubOptionClick={onFilterSubOptionClick}
          filterSelected={filter.selected}
        />
      ))}
      <div className="filter_buttons_container">
        <ButtonDark content="Apply Filters" />
        <ButtonGrey
          onClick={onFiltersClear}
          displayed={isFilterSelected}
          content="Clear All"
        />
      </div>
    </div>
  );
};

export default FilterSidebar;
