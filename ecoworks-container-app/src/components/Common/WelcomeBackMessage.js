import React, { useEffect, useState } from "react";
import "./WelcomeBackMessage.css";
import { useUserContext } from "../../context/UserContext";

const WelcomeBackMessage = () => {
  const { user } = useUserContext();
  const [visible, setVisible] = useState(false);
  let name = "";
  if (user !== "") {
    name = user[3].Value;
  }

  useEffect(() => {
    if (user !== "") {
      setVisible(true);
      setTimeout(() => {
        setVisible(false);
      }, 5000);
    }
  }, [user]);

  return (
    <div className={`${visible ? "welcome_back" : "closed"}`}>
      <p className="welcome_back_text">Welcome back, {name}!</p>
    </div>
  );
};

export default WelcomeBackMessage;
