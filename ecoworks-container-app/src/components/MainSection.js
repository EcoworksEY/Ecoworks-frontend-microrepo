import React from 'react'
import mainImage from "../assets/VectorMainImage.svg"
import "./MainSection.css"
import MainSectionSlider from './MainSectionSlider'


export default function MainSection (props) {
    return (
        <div class = "main_section">
            <div class="main_section_rectangle1">
                {/* THIS HAS RO BECOME DYNAMIC */}
                <MainSectionSlider />
            </div>
        
            <div class = "main_section_rectangle2">
                <img src = {mainImage} alt =""></img>
            </div>
        </div>
    )
}