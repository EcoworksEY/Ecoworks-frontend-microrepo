import React from 'react'
import mainImage from "../../../../assets/MainSection/VectorMainImage.svg"
import "./MainSection.css"
import MainSectionSlider from './MainSectionSlider'


export default function MainSection (props) {
    return (
        <div className = "main_section">
            <div className="main_section_rectangle1">
                {/* THIS HAS RO BECOME DYNAMIC */}
                <MainSectionSlider />
            </div>
        
            <div className = "main_section_rectangle2">
                <img classname= "main_section_image" src = {mainImage} alt =""></img>
            </div>
        </div>
    )
}