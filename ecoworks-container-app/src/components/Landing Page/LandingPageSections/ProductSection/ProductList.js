import React, { useRef, useState } from 'react';
import Product from './Product';
import "./ProductList.css";
import SideArrow from '../../../../assets/VectorSideArrow.svg'


export default function ProductList(props) {
    const ref = useRef(null)
    const [expandedLeft, setexpandedLeft] = useState(false);
    const [expandedRight, setExpandedRight] = useState(false);

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
            <div className='product_container' ref = {ref}>
                <img className = {`product_icon_arrow ${expandedLeft ? 'visible' : ''}`} style = {{rotate : "180deg"}} src = {SideArrow} alt='' onClick = {() => {scrollLeft(300)}}/>
                <Product />
                <img className =  {`product_icon_arrow ${expandedRight ? 'visible' : ''}`} src = {SideArrow} alt='' onClick = {() => {scrollRight(300)}}/>
            </div>
        )
    // )
}