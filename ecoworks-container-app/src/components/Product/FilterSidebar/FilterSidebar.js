import React from "react";

import Cross from "../../../assets/Navigation/VectorCross.svg";
import "./FilterSidebar.css";

import LargeTextDarkThin from "../Typography/LargeTextDarkThin";
import FilterOption from "./FilterOptions";
import ButtonDark from "../Button/ButtonDark";
import ButtonGrey from "../Button/ButtonGrey";

import FilterSubOptions from "./FilterSubOptionsData";
import { useProductFilterContext } from "../../../context/ProductFilterContext";

const FilterSidebar = (props) => {
  // Maybe - maintain a list of filters here
  // Structure : {colour: [] , ...} and then add and remove from the array

  //if the length of each of the filter type is 0, then isFilterSelected = false
  //

  const { isFilterSelected, filters, updateFilterValue } = useProductFilterContext();

  const scrollDown = () => {
    window.scrollTo({
      left: 0,
      top: 450,
      behavior: "smooth",
    });
  };
  // const [isFilterSelected, setisFilterSelected] = useState(false);

  const onClickCloseEntireMenu = props.onClickClose;

  const onFilterSubOptionClick = (filterId, filterSubOption) => {
    // setisFilterSelected(true);
    FilterSubOptions.filter((filter) => filter.id === filterId).filter(
      (subOpt) => {
        if (subOpt.selected.indexOf(filterSubOption) === -1) {
          subOpt.selected.push(filterSubOption);
        } else {
          subOpt.selected.splice(subOpt.selected.indexOf(filterSubOption), 1);
          return null;
        }
      }
    );
  };
  const onFiltersClear = () => {
    FilterSubOptions.map((filter) => 
      filter.selected.length = 0
    );
    FilterSubOptions.map((filter) =>
      updateFilterValue(filter.filterNameContext, filter.selected)
    );
  };

  const handleApplyFilters = () => {
    FilterSubOptions.map((filter) =>
      updateFilterValue(filter.filterNameContext, filter.selected)
    );
    props.onClickClose();
    scrollDown();
  };
    if (filters.productType.length > 0){
      FilterSubOptions[0].selected = filters.productType;
    }

  return (
    <div className={`${props.displayed ? "sidebar" : "sidebar_close"}`}>
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
        <ButtonDark content="Apply" handleClick={handleApplyFilters} />
        <ButtonGrey
          onFiltersClear={onFiltersClear}
          displayed={isFilterSelected}
          content="Clear All"
        />
      </div>
    </div>
  );
};

export default FilterSidebar;
