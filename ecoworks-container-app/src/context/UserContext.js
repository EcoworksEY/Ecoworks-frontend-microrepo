import React, { createContext, useContext, useReducer, useEffect } from "react";
import userReducer from "../reducers/UserReducer";
import axios from "axios";

const UserContext = createContext();
const API_URL = "https://api.eyecoworks.com"

const SIGNUP_URL = API_URL + "/auth/signup";
const SIGNUP_VERIFY = API_URL + "/auth/verification";
const SIGNIN_URL = API_URL + "/auth/login";
const ACCOUNT_DETAILS = API_URL + "/auth/account";
const LOG_OUT_URL = API_URL + "/auth/signout";

const getLocalUserData = () => {
  let localUser = localStorage.getItem("ecoworksUser");
  if (localUser) {
    return JSON.parse(localUser);
  } else {
    return "";
  }
};

const initialState = {
  user: getLocalUserData(),
  userAccessToken: "",
  userRefreshToken: "",
};

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  const signIn = async (username, password) => {
    try {
      const res = await axios.post(SIGNIN_URL, { username, password });
      dispatch( {type: "SET_USER_TOKENS", payload: res.data.AuthenticationResult})
      let accessToken = res.data.AuthenticationResult.AccessToken;
      const res_account = await axios.post(ACCOUNT_DETAILS, { username, accessToken });
      dispatch( {type: "SET_USER_INFO", payload: res_account.data.UserAttributes});
      return res.statusText;
    } catch (error) {
      return error.response.data.message;
    }
  };

  const verifyEmail = async (
    username,
    verificationCode,
  ) => {
    try {
      const res = await axios.post(SIGNUP_VERIFY, {
        username,
        verificationCode
      });
      return res.data.message;
    } catch (error) {
      return error.response.data.message;
    }
  };

  const signUp = async (
    username,
    password,
    family_name,
    given_name,
    email,
    birthdate
  ) => {
    try {
      const res = await axios.post(SIGNUP_URL, {
        username,
        password,
        family_name,
        given_name,
        email,
        birthdate,
      });
      return res.data.message;
    } catch (error) {
      return error.response.data.message;
    }
  };

  const log_out = async (userAccessToken, userRefreshToken) => {
    let accessToken = userAccessToken;
    let refreshToken = userRefreshToken;
    // console.log(accessToken, refreshToken)
    try {
      // const res = await axios.post(LOG_OUT_URL, {accessToken, refreshToken})
      // console.log(res);
      dispatch ({type: "LOG_OUT"})
    }
    catch (error) {
      return error.response.data.message;
    }
  };

  useEffect(() => {
    localStorage.setItem("ecoworksUser", JSON.stringify(state.user));
  }, [state]);

  return (
    <UserContext.Provider
      value={{
        ...state,
        signIn,
        signUp,
        verifyEmail,
        log_out
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

const useUserContext = () => {
  return useContext(UserContext);
};

export { UserProvider, useUserContext };
