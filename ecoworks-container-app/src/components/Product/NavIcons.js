import React from "react";
import "./NavIcons.css";
import Button from "./Button/Button";
import Down from "../../assets/Navigation/VectorDown.svg";
import Filters from "../../assets/Navigation/VectorFilters.svg";
import Cross from "../../assets/Navigation/VectorCross.svg";

import { useProductFilterContext } from "../../context/ProductFilterContext";

export default function NavIcons(props) {
  const { filters, updateFilterValue } = useProductFilterContext();
  const handleRemoveFilterSubOption = (selectedFilter, contextTitle) => {
    filters[contextTitle].splice(
      filters[contextTitle].indexOf(selectedFilter),
      1
    );
    updateFilterValue(contextTitle, filters[contextTitle]);
  };
  const handleSelectedFilterTextDisplay = (title, contextTitle) => {
    return (
      <div className="flex center">
        <p className="selected_filters_text">{title}: </p>
        &nbsp;
        {filters[contextTitle].map((selected) => (
          <div className="flex" key = {selected}>
            <p className="selected_filters_text">{selected}</p>
            <img
              className="selected_text_cross"
              src={Cross}
              alt="Close"
              onClick={() =>
                handleRemoveFilterSubOption(selected, contextTitle)
              }
            />
          </div>
        ))}
      </div>
    );
  };
  let colourText = "";
  let sizeText = "";
  let priceText = "";
  let coverTypeText = "";

  if (filters.colour.length > 0) {
    colourText = handleSelectedFilterTextDisplay("Colour", "colour");
  }
  if (filters.coverType.length > 0) {
    coverTypeText = handleSelectedFilterTextDisplay("Cover Type", "coverType");
  }
  if (filters.size.length > 0) {
    sizeText = handleSelectedFilterTextDisplay("Size", "size");
  }
  if (filters.price.length > 0) {
    priceText = handleSelectedFilterTextDisplay("Price", "price");
  }

  return (
    <div className="nav_container1">
      <div className="nav_container2">
        <Button
          title={"Notebook Types"}
          image={Down}
          handleFilterClick={props.handleFilterClick}
        />
        <Button
          title={"All Filters"}
          image={Filters}
          handleFilterClick={props.handleFilterClick}
        />
        {colourText}
        {priceText}
        {coverTypeText}
        {sizeText}
      </div>
      {/* <div className = "flex">
                <p>Sort By: </p>

                <select className='button'>
                    <option className='button'>
                    </option>
                    <option className='button'>
                        <Button title = {"A to Z"} image = {Down}/>
                    </option>
                    <option className='button'>
                        <Button title = {"Z to A"} image = {Down}/>
                    </option>
                    <option className='button'>
                        <Button title = {"Price"} image = {Down}/>
                    </option>
                    <option className='button'>
                        <Button title = {"Sort by"} image = {Down}/>
                    </option>
                </select>
            </div> */}
      <Button
        title={"Sort by"}
        image={Down}
        handleFilterClick={props.handleFilterClick}
      />
    </div>
  );
}
