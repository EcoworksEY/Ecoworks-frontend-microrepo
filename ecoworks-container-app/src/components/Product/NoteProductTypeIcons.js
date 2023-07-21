import React from "react";
import "./NoteProductTypeIcons.css";
import NoteIconsList from "./FiltersIconsList";

export default function NoteProductTypeIcons(props) {
    return (
       <div>
            <p className="products_home_text">Home  |  Note</p>
            <NoteIconsList productTypeSelected={props.productTypeSelected}/>
       </div>
    )
} 