import React from "react";
import NewArrivalsProduct1 from "./NewArrivalsProduct1";
import SideArrow from "../assets/VectorSideArrow.svg"
import "./NewArrivalsList.css"

const NewArrivals = [
    {
        name: "This is paper 1",
        price: 20.22
    },
    {
        name: "This is paper 1",
        price: 20.22
    },
    {
        name: "This is paper 1",
        price: 20.22
    },
    {
        name: "This is paper 1",
        price: 20.22
    },
    {
        name: "This is paper 1",
        price: 20.22
    },
    {
        name: "This is paper 1",
        price: 20.22
    }
]

export default function NewArrivalsList1 (props) {
    // const elementRef = useRef(null);
    // const [arrowDisable, setArrowDisable] = useState(true);

    // const handleHorizantalScroll = (element, speed, distance, step) => {
    //     let scrollAmount = 0;
    //     const slideTimer = setInterval(() => {
    //     element.scrollLeft += step;
    //     scrollAmount += Math.abs(step);
    //     if (scrollAmount >= distance) {
    //         clearInterval(slideTimer);
    //     }
    //     if (element.scrollLeft === 0) {
    //         setArrowDisable(true);
    //     } else {
    //         setArrowDisable(false);
    //     }
    //     }, speed);
    // }; onClick = {() => handleHorizantalScroll(elementRef.current,25,100,10)

    return (
        <div className="new_arrivals_list1">
            <NewArrivalsProduct1 newArrivals = {NewArrivals}/>
            <img className = 'product_icon_arrow' src = {SideArrow} alt=''/>
        </div>
    )
}