import React from "react";
import NewArrivalsProduct2 from "./NewArrivalsProduct2";
import SideArrow from "../assets/VectorSideArrow.svg"
import "./NewArrivalsList.css"


export default function NewArrivalsList2 (props) {

    return (
        <div className="new_arrivals_background">
                <div className="new_arrivals_list2">
                    <NewArrivalsProduct2 />
                    <img className = 'product_icon_arrow' src = {SideArrow} alt=''/>
                </div>
        </div>
        
    )
}