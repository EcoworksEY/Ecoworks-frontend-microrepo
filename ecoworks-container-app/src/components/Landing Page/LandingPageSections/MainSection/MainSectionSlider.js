import React from 'react'
import { useNavigate } from "react-router-dom";

import Image1 from "../../../../assets/MainSection/MainSection1.svg"
import Image2 from "../../../../assets/MainSection/MainSection2.svg"
import Image3 from "../../../../assets/MainSection/MainSection3.svg"
import arrow from "../../../../assets/Navigation/VectorArrowMainSection.svg"

import "./MainSectionSlider.css";
import "./MainSection.css"

const scrollDownToNewArrivals = () => {
  window.scrollTo({
      left: 0,
      top: 2725,
      behavior: 'smooth'
  });
}
const scrollDownToPopular = () => {
  window.scrollTo({
      left: 0,
      top: 850,
      behavior: 'smooth'
  });
}
const delay = 5000;

export default function MainSectionSlider (props) {
    const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  const navigate = useNavigate();

  const navigateToProducts = () => {
    navigate("/notes");
  };

  const promotions = [
    { 
        promoImage: Image1, 
        title: "20%OFF", 
        subtitle:"Notebooks & Pencils",
        additionalText: "Enjoy 20% off all notebook and pencils. Ends 15 August. T&C apply",
        onClickFunction: navigateToProducts,
    },
    { 
        promoImage:Image2, 
        title: "Popular!", 
        subtitle:"Notebooks & Pencils",
        additionalText: "Shop our most popular selection of Notebooks & Pencils",
        onClickFunction: scrollDownToPopular,
    },
    { 
        promoImage: Image3, 
        title: "Brand New!", 
        subtitle:"Notebooks & Pencils",
        additionalText: "Shop our latest selection of Notebooks and Pencils",
        onClickFunction: scrollDownToNewArrivals,
    }
]

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
  }, [index, promotions.length]);

    return (
            
        <div className = "slideshow">
            <div className = "slideshowSlider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
            {promotions.map((promo, index) => (
                <div className='slide' key={promo.promoImage}>
                <div className = "main_section_rectangle3">
                    <img src = {promo.promoImage} alt =""></img>                   
                </div>
                <div className = "main_section_rectangle3_text">
                    <p className = "title">{promo.title}</p>
                    <p className = "subtitle">{promo.subtitle}</p>
                    <p className = "text_main_section">{promo.additionalText}</p>
                </div>
                <div className = "main_section_rectangle4" onClick={() => promo.onClickFunction()}>
                    <p className ="shop_now" >SHOP NOW</p>
                    <img className = "icon" src = {arrow} alt =""></img> 
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