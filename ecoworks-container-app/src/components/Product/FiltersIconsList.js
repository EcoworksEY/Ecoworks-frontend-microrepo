import React from "react";
import "./FiltersIcon.css";
import DotGritNote from "../../assets/Notes/VectorDotGrit.svg";
import LinedPaper from "../../assets/Notes/VectorLinedpaper.svg";
import BulletJournals from "../../assets/Notes/VectorBulletJournals.svg";
import PopularItems from "../../assets/Notes/VectorPopularItems.svg";
import NoteIcon from "./FiltersIcon";

export const noteIcons = [
    {
        image: DotGritNote,
        title: "Dot Grit Notebooks",
        contextName: "productType"
    },
    {
        image: LinedPaper,
        title: "Lined Paper Notebooks",
        contextName: "productType"
    },
    {
        image: BulletJournals,
        title: "Bullet Journals",
        contextName: "productType"
    },
    {
        image: PopularItems,
        title: "Popular Items",
        contextName: "productType"
    }
]

export default function NoteIconsList (props) {
    return (
        <div className="filters_container">
            {noteIcons.map ((data, index) => ( 
                <NoteIcon 
                    key = {data.title}
                    image = {data.image}
                    title = {data.title}
                    productTypeSelected = {props.productTypeSelected}
                    />
            ))}
        </div>
        
    )
}