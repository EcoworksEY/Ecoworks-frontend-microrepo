const ProductReducer = (state, action) => {
   
    switch (action.type) {  
      case "SET_USER_TOKENS":
        let authResults = action.payload;
        return {
          ...state,
          userAccessToken: authResults.AccessToken,
          userRefreshToken: authResults.RefreshToken
        };
      case "SET_USER_INFO":
        return {
          ...state,
          user: action.payload,
        }
        case "LOG_OUT":
          return {
            ...state,
            user: "",
            userAccessToken: "",
            userRefreshToken: ""
          }

      default:
        return state;
    }
  };
  
  export default ProductReducer;
  