import React from "react";
import "./FiltersIcon.css";

import { useProductFilterContext } from "../../context/ProductFilterContext";

export default function NoteIcon(props) {
    const {updateFilterValue} = useProductFilterContext();
    const scrollDown = () => {
        window.scrollTo({
            left: 0,
            top: 450,
            behavior: 'smooth'
        });
    }

    const handleClick = () => {
        let newArr = props.productTypeSelected;
        if (!props.productTypeSelected.includes(props.title)){
            newArr.push(props.title);
            updateFilterValue(props.productTypeSelected, newArr);
            scrollDown();
        } else {
            newArr.splice(props.productTypeSelected.indexOf(props.title), 1)
            updateFilterValue(props.productTypeSelected, newArr);
        }
    }
  return (
    <div className="filters_icon_container">
      <div
        className={`${
          props.productTypeSelected.includes(props.title)
            ? "filters_icon_image_background_selected"
            : "filters_icon_image_background"
        }`}
        onClick={() => handleClick()}
      >
        <img className="filters_icon_image" src={props.image} alt=""></img>
      </div>
      <p className="filters_icon_text">{props.title}</p>
      <div
        className={`${
          props.productTypeSelected.includes(props.title)
            ? "filter_icon_selected_rect"
            : "closed"
        }`}
      ></div>
    </div>
  );
}
