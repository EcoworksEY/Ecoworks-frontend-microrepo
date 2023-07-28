import React from "react";
import "./NoteProductTypeIcons.css";
import NoteIconsList from "./FiltersIconsList";
import { useNavigate } from "react-router-dom";

export default function NoteProductTypeIcons(props) {
    const navigate = useNavigate();

    const navigateToHome = () => {
      navigate("/home");
    };
    return (
       <div>
            <div className = "single_product_categories_text_group">
                <p className = "single_product_categories_text" onClick={() => navigateToHome()}>Home |</p>
                &nbsp;
                <p className = "single_product_categories_text" > Note</p>
            </div>
            <NoteIconsList productTypeSelected={props.productTypeSelected}/>
       </div>
    )
} 