import React from 'react'
import { useNavigate } from "react-router-dom";

import Image1 from "../../../../assets/MainSection/MainSection1.svg"
import Image2 from "../../../../assets/MainSection/MainSection2.svg"
import Image3 from "../../../../assets/MainSection/MainSection3.svg"
import arrow from "../../../../assets/VectorArrowMainSection.svg"

import "./MainSectionSlider.css";
import "./MainSection.css"

const promotions = [
    { 
        promoImage: Image1, 
        title: "20%OFF", 
        subtitle:"Notebooks & Pencils",
        additionalText: "Enjoy 20% off all notebook and pencils. Ends 15 July. T&C apply"
    },
    { 
        promoImage:Image2, 
        title: "50%OFF", 
        subtitle:"Notebooks & Pencils",
        additionalText: "Enjoy 20% off all notebook and pencils. Ends 15 July. T&C apply"
    },
    { 
        promoImage: Image3, 
        title: "60%OFF", 
        subtitle:"Notebooks & Pencils",
        additionalText: "Enjoy 20% off all notebook and pencils. Ends 15 July. T&C apply"
    }
]
const delay = 5000;

export default function MainSectionSlider (props) {
    const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  const navigate = useNavigate();

  const navigateToProducts = () => {
    navigate("/products");
  };

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === promotions.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

    return (
            
        <div className = "slideshow">
            <div className = "slideshowSlider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
            {promotions.map((promo, index) => (
                <div className='slide'>
                <div class = "main_section_rectangle3">
                    <img src = {promo.promoImage} alt =""></img>                   
                </div>
                <div class = "main_section_rectangle3_text">
                    <p class = "title">{promo.title}</p>
                    <p class = "subtitle">{promo.subtitle}</p>
                    <p class = "text_main_section">{promo.additionalText}</p>
                </div>
                <div class = "main_section_rectangle4" onClick={() => navigateToProducts()}>
                    <p class ="shop_now" >SHOP NOW</p>
                    <img class = "icon" src = {arrow} alt =""></img> 
                </div>
            </div>
            ))}
            </div>


        <div className="slideshowDots">
          {promotions.map((_, idx) => (
            <div
              key={idx}
              className={`slideshowDot${index === idx ? " active" : ""}`}
              onClick={() => {
                setIndex(idx);
              }}
            ></div>
          ))}
        </div>
      </div>

        
    )
}