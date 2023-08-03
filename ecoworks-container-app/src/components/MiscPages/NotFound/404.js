import React from "react";
import NotFoundImage from "../../../assets/Navigation/404-2.svg";
import { useNavigate } from "react-router-dom";
import TitleTextHeavy from "../../Common/TitleTextHeavy";

const NotFoundPage = () => {
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/home");
  };
  return (
    <div className='h-screen flex justify-center mt-20'>
      <div className="w-2/5 text-center">
        <img src={NotFoundImage} alt="Not Found"></img>
        <div className="mt-4">
          <TitleTextHeavy text="Something's wrong here" />
          <p>
            This is a 404 error, which means you've clicked a bad link or
            entered an invalid URL. Maybe what you're looking can be found at{" "}
            <u className="cursor-pointer" onClick={() => navigateToHome()}>shop.eyecoworks.com/home</u>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
