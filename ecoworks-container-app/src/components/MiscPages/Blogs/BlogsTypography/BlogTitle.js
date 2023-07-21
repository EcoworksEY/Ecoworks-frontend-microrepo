import React from 'react'
import "./BlogText.css";

const BlogTitle = (props) => {
    return (
        <p className='blog_title'>{props.text}</p>
    )
}

export default BlogTitle;