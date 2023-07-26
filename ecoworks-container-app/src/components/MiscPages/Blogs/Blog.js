import React from "react";

import BlogTitle from "./BlogsTypography/BlogTitle";
import BlogText from "./BlogsTypography/BlogText";
import BlogSubtitle from "./BlogsTypography/BlogSubtitle";
import BlogLastPoint from "./BlogsTypography/BlogLastPoint";

const Blog = (props) => {
  return (
    <div>
      {props.blogsData.map((blog) => (
        <div className="blog_container" key={blog.title}>
          <BlogTitle text={blog.title} />
          <BlogText text={blog.paragraph1}/>
          <div className="blog_container_image">
            <img src = {blog.blogImages[0]} alt="" ></img>
            <div className="blog_container_image_left_text">
                <BlogSubtitle text ={blog.paragraph2Title[0]}/>
                <BlogText text={blog.paragraph2Text1}/>
                <BlogSubtitle text ={blog.paragraph2Title[1]}/>
                <BlogText text={blog.paragraph2Text2}/>
            </div>
          </div>
          <div className="blog_container_image">
            <div>
                <BlogSubtitle text ={blog.paragraph3Title[0]}/>
                <BlogText text={blog.paragraph3Text1}/>
                <BlogSubtitle text ={blog.paragraph3Title[1]}/>
                <BlogText text={blog.paragraph3Text2}/>
            </div>
            <img className="blog_container_image_left_text" src = {blog.blogImages[1]} alt="" ></img>
          </div>
          <div className="blog_container_image">
            <img src = {blog.blogImages[2]} alt="" ></img>
            <div className="blog_container_image_left_text">
                <BlogSubtitle text ={blog.paragraph4Title[0]}/>
                <BlogText text={blog.paragraph4Text1}/>
                <BlogSubtitle text ={blog.paragraph4Title[1]}/>
                <BlogText text={blog.paragraph4Text2}/>
            </div>
          </div>
          <BlogLastPoint text = {blog.lastPoint} />
        </div>
      ))}
    </div>
  );
};

export default Blog;
