const ProductReducer = (state, action) => {
  const setColours = (colours) => {
    let coloursData = [];
    colours.map((colour) => {
      coloursData.push({code: colour, name: getColourName(colour)})
    });
    return coloursData;
  };
  const getColourName = (colour) => {
    switch (colour) {
      case "#B8B3B3":
        return "Grey";
      case "#000000":
        return "Black";
      case "#304043":
        return "Green";
      case "#09328D":
        return "Blue";
      case "#E8966D":
        return "Salmon";
      case "#F6D324":
        return "Yellow";
      case "#6C6940":
        return "Green";
      case "#0E2C77":
        return "Blue";
      default:
        return "Standard";
    }
  };
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "SET_API_DATA":
      let productsData = action.payload;
      let actual_featured_data = [];
      let actual_product_data = [];
      let actual_new_products = [];

      let featuredData = productsData.filter((curElem) => {
        return curElem.category === "Write" || curElem.category === "Plan";
      });

      featuredData.map((product) => {
        let data = {
          id: product.product_id,
          title: product.name,
          price: product.price,
          images: product.images,
          productType: product.product_type,
          subCategory: product.sub_category,
          colours: setColours(product.colours),
          category: product.category,
        };
        actual_featured_data.push(data);
      });

      const newProductsData = action.payload.filter((curElem) => {
        return curElem.category === "Carry" || curElem.category === "Plan";
      });
      newProductsData.map((product) => {
        let data = {
          id: product.product_id,
          title: product.name,
          price: product.price,
          images: product.images,
          productType: product.product_type,
          subCategory: product.sub_category,
          colours: setColours(product.colours),
          category: product.category,
        };
        actual_new_products.push(data);
      });

      productsData.map((product) => {
        let data = {
          id: product.product_id,
          title: product.name,
          price: product.price,
          images: product.images,
          productType: product.product_type,
          subCategory: product.sub_category,
          colours: setColours(product.colours),
          category: product.category,
        };
        actual_product_data.push(data);
      });

      return {
        ...state,
        isLoading: false,
        products: actual_product_data,
        featuredProducts: actual_featured_data,
        newProducts1: actual_new_products,
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
      console.log(action.payload);
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
