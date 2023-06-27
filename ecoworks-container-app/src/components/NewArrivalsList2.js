import React, {useRef, useState} from "react";
import NewArrivalsProduct2 from "./NewArrivalsProduct2";
import SideArrow from "../assets/VectorSideArrow.svg"
import "./NewArrivalsList.css"
import "./Product.css"

const newArrivalsData = [
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

export default function NewArrivalsList2 (props) {
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
        <div className="new_arrivals_background">
            <div className="new_arrivals_list1" >
                <img className = {`product_icon_arrow ${expandedLeft ? 'visible' : ''}`} style = {{rotate : "180deg"}} src = {SideArrow} alt='' onClick = {() => {scrollLeft(360)}}/>
                <div className='new_arrivals_container' ref = {ref}>
                    {newArrivalsData.map ((data, index) => ( 
                        <NewArrivalsProduct2
                            key = {index}
                            name = {data.name}
                        />
                    ))}
                </div> 
                <img className =  {`product_icon_arrow ${expandedRight ? 'visible' : ''}`} src = {SideArrow} alt='' onClick = {() => {scrollRight(360)}}/>
            </div>
        </div>

        
        
    )
}