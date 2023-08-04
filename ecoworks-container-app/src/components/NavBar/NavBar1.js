import React, { useState } from "react";
import ecoworksBlogIcon from "../../assets/NavBar/VectorblogIcon.svg";
import ecoworksSignInIcon from "../../assets/Navigation/VectorsignInIcon.svg";
import "./NavBar.css";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";
import LogOut from "./LogOut";

export default function NavBar1(props) {
  const { user, userAccessToken, userRefreshToken, log_out } = useUserContext();
  const navigate = useNavigate();
  const [logoutVisible, setLogoutVisible] = useState(false);

  const navigateToSignIn = () => {
    navigate("/signin");
  };
  const navigateToBlogs = () => {
    navigate("/blogs");
  };
  let signInButton = "";

  const handleProfileIcon = () => {
    if (logoutVisible) {
      setLogoutVisible(false);
    } else {
      setLogoutVisible(true);
    }
  };

  const handleLogOutClick = () => {
    setLogoutVisible(false);
    log_out(userAccessToken, userRefreshToken);
  };
  if (user !== "") {
    signInButton = (
      <div className="options" onClick={() => handleProfileIcon()}>
        <div className="signed_in_icon">
          <p className="signed_in_text">{user[3].Value.at(0)}</p>
        </div>
      </div>
    );
  }
  if (user === "") {
    signInButton = (
      <div className="options" onClick={navigateToSignIn}>
        <img
          className="navbar_ecoworks_blog_logo"
          src={ecoworksSignInIcon}
          alt=""
        />
        <p className="navbar_ecoworks_blog">SIGN IN</p>
      </div>
    );
  }

  return (
    <div className="navbar">
      <LogOut
        logoutVisible={logoutVisible}
        handleLogOutClick={handleLogOutClick}
      />
      <div className="navbar_rectangle1">
        <p className="navbar_message">Free Shipping on Orders Over $50*</p>
      </div>
      <div className="navbar_icons_top_layer">
        <div className="options" onClick={navigateToBlogs}>
          <img
            className="navbar_ecoworks_blog_logo"
            src={ecoworksBlogIcon}
            alt=""
          />
          <p className="navbar_ecoworks_blog">ECOWORKS BLOG</p>
        </div>
        {signInButton}
      </div>
    </div>
  );
}
