const ProductReducer = (state, action) => {
    // if (action.type === "SET_LOADING") {
    //   return {
    //     ...state,
    //     isLoading: true,
    //   };
    // }
  
    // if (action.type === "API_ERROR") {
    //   return {
    //     ...state,
    //     isLoading: false,
    //     isError: true,
    //   };
    // }
  
    switch (action.type) {
      case "SET_LOADING":
        return {
          ...state,
          isLoading: true,
        };
  
      case "SET_API_DATA":
        let productsData = action.payload;
        
        let featuredData = (productsData.filter((curElem) => {
          return (curElem.category === "Featured")
        }))
        const newProductsData = action.payload.filter((curElem) => {
          return curElem.category === "New"
        })
  
        return {
          ...state,
          isLoading: false,
          products: action.payload,
          featuredProducts: featuredData,
          newProducts1: newProductsData
        };
  
      case "API_ERROR":
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
  
      case "SET_SINGLE_LOADING":
        return {
          ...state,
          isSingleLoading: true,
        };
  
      case "SET_SINGLE_PRODUCT":
        console.log(action.payload)
        return {
          ...state,
          isSingleLoading: false,
          singleProduct: action.payload,
        };
        case "SET_SUGGESTED_PRODUCTS":
        return {
          ...state,
          suggestedProducts: action.payload,
        };
  
      case "SET_SINGLE_ERROR":
        return {
          ...state,
          isSingleLoading: false,
          isError: true,
        };
  
      default:
        return state;
    }
  };
  
  export default ProductReducer;