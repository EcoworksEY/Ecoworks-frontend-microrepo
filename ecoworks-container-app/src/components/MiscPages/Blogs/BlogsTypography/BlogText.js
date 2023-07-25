import React from 'react'
import "./BlogText.css";

const BlogText = (props) => {
    return (
        <p className='blog_text'>{props.text}</p>
    )
}

export default BlogText;