import React from "react";
import "./NavIcons.css";
import Button from "./Button/Button";
import Down from "../../assets/Navigation/VectorDown.svg";
import Filters from "../../assets/Navigation/VectorFilters.svg";

export default function NavIcons(props) {
  return (
    <div className="nav_container1">
      <div className="nav_container2">
        <Button title={"Notebook Types"} image={Down} handleFilterClick = {props.handleFilterClick}/>
        <Button
          title={"All Filters"}
          image={Filters}
          handleFilterClick = {props.handleFilterClick}
        />
      </div>
      {/* <div class = "flex">
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
      <Button title={"Sort by"} image={Down} />
    </div>
  );
}
