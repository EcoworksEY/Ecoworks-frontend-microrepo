import React from "react";
import { useNavigate } from "react-router-dom";

import "./TemplatePage.css";
import Blog from "./Blogs/Blog";

const TemplatePage = (props) => {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/home");
  };
  let data = "";
  let mainImageData = "";
  if (props.pageTitle === "Blogs"){
    data = <Blog blogsData = {props.blogsData}/>;
    mainImageData = <img src={props.mainImage} alt="" />;
  }

  return (
    <div className="template_image_container">
      {mainImageData}
      <div class="navigation_text_group">
        <p className="navigation_categories_text" onClick={() => navigateToHome()}>
          Home |
        </p>
        &nbsp;
        <p className="navigation_categories_text">{props.pageTitle}</p>
      </div>
      {data}
    </div>
  );
};

export default TemplatePage;
