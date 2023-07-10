import React from 'react'
import "./MainSection.css"
import temp from "../../../../assets/temp1.svg"
import arrow from "../../../../assets/VectorArrowMainSection.svg"
import "./MainSectionSlider.css"

const promotions = [
    { 
        promoImage: {temp}, 
        title: "20%OFF", 
        subtitle:"Notebooks & Pencils",
        additionalText: "Enjoy 20% off all notebook and pencils. Ends 15 July. T&C apply"
    },
    { 
        promoImage: {temp}, 
        title: "50%OFF", 
        subtitle:"Notebooks & Pencils",
        additionalText: "Enjoy 20% off all notebook and pencils. Ends 15 July. T&C apply"
    },
    { 
        promoImage: {temp}, 
        title: "60%OFF", 
        subtitle:"Notebooks & Pencils",
        additionalText: "Enjoy 20% off all notebook and pencils. Ends 15 July. T&C apply"
    }
]
const delay = 5000;

export default function MainSectionSlider (props) {
    const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

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
                    <img src = {temp} alt =""></img>                   
                </div>
                <div class = "main_section_rectangle3_text">
                    <p class = "title">{promo.title}</p>
                    <p class = "subtitle">{promo.subtitle}</p>
                    <p class = "text">{promo.additionalText}</p>
                </div>
                <div class = "main_section_rectangle4">
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