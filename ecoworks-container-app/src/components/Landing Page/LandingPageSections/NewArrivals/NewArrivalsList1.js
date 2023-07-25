import React, { useRef, useState } from "react";
import NewArrivalsProduct1 from "./NewArrivalsProduct1";
import SideArrow from "../../../../assets/VectorSideArrow.svg"
import "./NewArrivalsList.css"
import "../ProductSection/Product.css"
import sugProd1 from "../../../../assets/SampleProduct/suggestedProd1.svg";

// INTEGRATION WITH BACKEND
// At least 5 new Arrivals



const newArrivalsData = [
    {
        id: "Product from Main Page New Arrivals 1",
        images: [sugProd1],
        title: "Lined Notebook Black Marble ",
        price: "18.89",
        category: "A5",
        colours: [ { code: "#0E2C77", name: "Blue" },
        { code: "#000000", name: "Black" },],
      },
]

export default function NewArrivalsList1 (props) {
    const ref = useRef(null)
    const [expandedLeft, setexpandedLeft] = useState(false);
    const [expandedRight, setExpandedRight] = useState(true);

    const scrollRight = (scrollOffset) => {
        let previousScroll = ref.current.scrollLeft;
        ref.current.scrollLeft += scrollOffset;
        let currentScroll = ref.current.scrollLeft;

        setexpandedLeft(true)
        if (((currentScroll - previousScroll) < 49)){
            setExpandedRight(false)
        }
    }
    const scrollLeft = (scrollOffset) => {
        ref.current.scrollLeft -= scrollOffset;
        if (ref.current.scrollLeft === 0){
            setexpandedLeft(false);
        }
        setExpandedRight(true)
    }


    return (
        <div className="new_arrivals_list1" >
            <img className = {`product_icon_arrow ${expandedLeft ? 'visible' : ''}`} style = {{rotate : "180deg"}} src = {SideArrow} alt='' onClick = {() => {scrollLeft(360)}}/>
            <div className='new_arrivals_container' ref = {ref}>
                {newArrivalsData.map ((data, index) => ( 
                    <NewArrivalsProduct1
                        key = {data.id}
                        product = {data}
                    />
                ))}
            </div> 
            <img className =  {`product_icon_arrow ${expandedRight ? 'visible' : ''}`} src = {SideArrow} alt='' onClick = {() => {scrollRight(360)}}/>

        </div>
    )
}