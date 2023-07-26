import React from "react";
import { useNavigate } from "react-router-dom";

import "./TemplatePage.css";
import BlogTitle from "./Blogs/BlogsTypography/BlogTitle";
import BlogSubtitle from "./Blogs/BlogsTypography/BlogSubtitle";
import BlogText from "./Blogs/BlogsTypography/BlogText";

const TemplatePage = (props) => {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/home");
  };

  return (
    <div className="template_page_container">
      <div className="navigation_text_group">
        <p
          className="navigation_categories_text"
          onClick={() => navigateToHome()}
        >
          Home |
        </p>
        &nbsp;
        <p className="navigation_categories_text">{props.pageTitle}</p>
      </div>
      <div className="template_main_text_container">
        <BlogTitle text={props.pageData.title} />
        <BlogText text={props.pageData.introduction} />
        {props.pageData.subSectionTitle.map((data, index) => (
          <div key = {data}>
            <BlogSubtitle text={data} />
            <BlogText text={props.pageData.subSectionText[index]} />
          </div>
        ))}
        <BlogText text={props.pageData.conclusion} />
      </div>
    </div>
  );
};

export default TemplatePage;
