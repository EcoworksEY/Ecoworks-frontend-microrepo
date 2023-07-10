import React from 'react'
import "../ProductSection/ProductSection.css"
import "./NewArrivalsList.css"
import NewArrivalsList1 from './NewArrivalsList1'
import NewArrivalsList2 from './NewArrivalsList2'

export default function NewArrivals(props) {
    return (
        <div>
            <h1 className = "product_header" >New Arrivals</h1>
            <NewArrivalsList1 />
            <NewArrivalsList2 />
        </div>

    )
}