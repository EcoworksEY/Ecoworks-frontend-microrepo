import React, { useEffect, useState } from "react";
import LargeTextDarkThin from "../Typography/LargeTextDarkThin";
import Cross from "../../../assets/Navigation/VectorCross.svg";


const FilterSubOptions = (props) => {
  const [selected, setSelected] = useState(false);

  // useEffect(() => {
    console.log(props.filterSelected);
    // if (props.filterSelected.includes(props.filterOptionTitle)) {
    //   setSelected(true);}
  //   }
  // }, [setSelected, props.filterSelected, props.filterOptionTitle]);

  return (
    <div>
      <div
        className={`${
          props.filterSelected.includes(props.filterOptionTitle)
            ? "filter_sub_option_container_selected"
            : "filter_sub_option_container"
        }`}
        onClick={() => props.onClickFilterSubOption(props.filterOptionTitle)}
      >
        <img className = "icon_sub_option" src={props.icon} alt="" />
        <div className="filter_sub_option_text">
          <LargeTextDarkThin content={props.filterOptionTitle} />
        </div>
        <img
        className={`${
          props.filterSelected.includes(props.filterOptionTitle)
            ? "sidebar_sub_option_cross"
            : "sidebar_sub_option_cross"
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
