import React from "react";
import LargeTextDarkThin from "../Typography/LargeTextDarkThin";
import Cross from "../../../assets/Navigation/VectorCross.svg";
import {useProductFilterContext} from "../../../context/ProductFilterContext";

const FilterSubOptions = (props) => {
  const {filters} = useProductFilterContext();
  // const filterType = eval(props.filterNameContext);

  const onClickFilterSubOption = (e) => {
    props.onClickFilterSubOption(props.filterOptionTitle);
    console.log(props.filterName);
    if (props.filterNameContext === "productType"){
      // console.log(filterType);
      console.log(filters.eval(props.filterNameContext));
      console.log("reached");
    }
  }
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
        onClick={(e) => onClickFilterSubOption(e)}
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
        onClick={() => props.closeFilter()}
      />
      </div>
      <div className="divider_line_sub_option" />
    </div>
  );
};

export default FilterSubOptions;
