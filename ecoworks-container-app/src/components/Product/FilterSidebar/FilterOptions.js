import React, { useState } from "react";
import LargeTextDarkThin from "../Typography/LargeTextDarkThin";
import ArrowRight from "../../../assets/Navigation/VectorRight.svg";
import SelectedFilterSidebar from "./SelectedFilterSidebar";

const FilterOption = (props) => {
  const [filterMenuOpen, setFilterMenuOpen] = useState(false);
  const onFilterMenuOpen = () => {
    setFilterMenuOpen(true);
  };
  const onFilterClose = () => {
    setFilterMenuOpen(false);
  };
  const onClickFilterSubOption = (filterSubOption) => {
    setFilterMenuOpen(false);
    props.onFilterSubOptionClick(props.id, filterSubOption);
  };

  return (
    <div>
      <div
        className="filter_option_container"
        onClick={() => onFilterMenuOpen()}
      >
        <div>
          <LargeTextDarkThin content={props.filterName} />
          <div className="selected_filter_names">
            {props.filterSelected.map((selected) => (
              <p key = {props.id} className="selected_filter_text">{selected}</p>
            ))}
          </div>
        </div>

        <img src={ArrowRight} alt="" />
      </div>
      <div className="divider_line" />
      <SelectedFilterSidebar
        key = {props.id}
        displayed={filterMenuOpen}
        filterName={props.filterName}
        filterNameContext={props.filterNameContext}
        filterSubOptions={props.filterSubOptions}
        onClickCloseEntireMenu={props.onClickCloseEntireMenu}
        closeFilter={onFilterClose}
        onClickFilterSubOption={onClickFilterSubOption}
        filterSelected = {props.filterSelected}
      />
    </div>
  );
};

export default FilterOption;