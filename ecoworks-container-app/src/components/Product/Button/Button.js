import React from 'react'
import "./Button.css"

export default function Button(props) {
    return (
        <div className='button' onClick = {() => props.handleFilterClick()}>
            <p className='button_text'>{props.title}</p>
            <img className ='button_icon' src = {props.image} alt=''></img>
        </div>
    )
}