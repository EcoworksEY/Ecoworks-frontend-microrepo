import React from "react";
import "./FiltersIcon.css";



export default function NoteIcon (props) {
    return (

                <div className="filters_icon_container">
                    <div className="filters_icon_image_background">
                        <img className = "filters_icon_image" src = {props.image}  alt=""></img>
                    </div>
                    <p className="filters_icon_text">{props.title}</p>
                </div>
    )
}