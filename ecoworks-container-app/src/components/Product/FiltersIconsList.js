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
        title: "Dot Grit Notebooks"
    },
    {
        image: LinedPaper,
        title: "Lined Paper Notebooks"
    },
    {
        image: BulletJournals,
        title: "Bullet Journals"
    },
    {
        image: PopularItems,
        title: "Popular Items"
    }
]

export default function NoteIconsList (props) {
    console.log(props.productTypeSelected)
    return (
        <div className="filters_container">
            {noteIcons.map ((data, index) => ( 
                <NoteIcon 
                    key = {index}
                    image = {data.image}
                    title = {data.title}
                    productTypeSelected = {props.productTypeSelected}
                    />
            ))}
        </div>
        
    )
}