import React, {useState} from 'react'
import arrow from "../../../assets/Navigation/VectorArrowMainSection.svg";

const Description = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const onExpand = () => {
        if (isExpanded){
            setIsExpanded(false);
        } else if (!isExpanded) {
            setIsExpanded(true);
        }
    };

    return (
        <div>
            <div className= {isExpanded === true ? 'single_product_desc_button desc_expanded' : 'single_product_desc_button'} onClick = {onExpand}>
                <div className='desc_box'>
                    <p></p>
                    <p className='single_product_general_button_text description'>description</p>
                    <img className = {isExpanded === true ? 'transformed_arrow_icon' : 'arrow_icon'} src = {arrow} alt = ''></img>
                </div>
                {isExpanded && (
                    <p className='desc_text'>Back To It: Make a plan, map it out, stay on track. Our new Boulevard Day Planner, designed for modern lives and daily plans. Within the debossed, textured paper hardcover, you 'sll find premium Pale Ivory pages with prompts and space for setting out your day. Jot to do lists, set priorities and plan your AM/PM tasks or agenda. Bound by beautiful metal wire-O binding to sit flat on your desk as you write, or flip the cover to the back for planning with ease.</p>
                )}
            </div>
        </div>
        
    )
}

export default Description;