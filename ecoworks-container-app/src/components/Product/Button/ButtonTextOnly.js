import React from 'react'
import "./Button.css"

export default function ButtonTextOnly(props) {
    return (
        <div className='button_text_only'>
            <div className='button_text_only_element'>
                <p className='button_text'>{props.title}</p>
            </div>
        </div>
    )
}