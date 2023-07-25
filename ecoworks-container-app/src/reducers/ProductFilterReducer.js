const ProductFilterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      // let priceArr = action.payload.map((curElem) => curElem.price);
      // let maxPrice = Math.max(...priceArr);

      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
        filters: { ...state.filters },
      };

    case "GET_SORT_VALUE":
      // let userSortValue = document.getElementById("sort");
      // let sort_value = userSortValue.options[userSortValue.selectedIndex].value;
      return {
        ...state,
        sorting_value: action.payload,
      };

    case "SORTING_PRODUCTS":
      let newSortData;
      // let tempSortProduct = [...action.payload];

      const { filter_products, sorting_value } = state;
      let tempSortProduct = [...filter_products];

      const sortingProducts = (a, b) => {
        if (sorting_value === "lowest") {
          return a.price - b.price;
        }

        if (sorting_value === "highest") {
          return b.price - a.price;
        }

        if (sorting_value === "a-z") {
          return a.name.localeCompare(b.name);
        }

        if (sorting_value === "z-a") {
          return b.name.localeCompare(a.name);
        }
      };

      newSortData = tempSortProduct.sort(sortingProducts);

      return {
        ...state,
        filter_products: newSortData,
      };

    case "UPDATE_FILTERS_VALUE":
      const { name, value } = action.payload;

      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };

    case "FILTER_PRODUCTS":
      let { all_products } = state;
      let tempFilterProduct = [...all_products];
      let tempFilterSelected = state.isFilterSelected;

      const { text, productType, colour, size, price, coverType } = state.filters;

      if (text) {
        tempFilterProduct = tempFilterProduct.filter((curElem) => {
          return curElem.name.toLowerCase().includes(text);
        });
      }

      if (productType.length !== 0) {
        tempFilterProduct = tempFilterProduct.filter((curElem) =>
          productType.includes(curElem.productType)
        );
        tempFilterSelected = true;
      }

      if (colour.length !== 0) {
        if (!colour.includes("MultiColour")){
          tempFilterProduct = tempFilterProduct.filter((curElem) =>
          curElem.colours.some((r) => colour.includes(r.name)))
        }
        tempFilterSelected = true;
      }

      if (size.length !== 0) {
        tempFilterProduct = tempFilterProduct.filter((curElem) =>
          size.includes(curElem.subCategory)
        );
        tempFilterSelected = true;
      }

      if (price.length !== 0) {
        const numberPrice = [];
        price.map((price) => numberPrice.push(price.split(" - ")))
        tempFilterProduct = tempFilterProduct.filter((curElem) => 
          numberPrice.some(prices => (Number(prices[0]) < Number(curElem.price) && Number(prices[1]) > Number(curElem.price)))
        )
        tempFilterSelected = true;
      }

      // if (coverType !== 0){
      //   console.log("This can be implemented in the future")
      // }

      return {
        ...state,
        filter_products: tempFilterProduct,
        isFilterSelected: tempFilterSelected
      };

    case "CLEAR_FILTERS":
      return {
        ...state,
        filters: {
          ...state.filters,
          text: "",
          category: "all",
          company: "all",
          color: "all",
          maxPrice: 0,
          price: state.filters.maxPrice,
          minPrice: state.filters.maxPrice,
        },
      };

    default:
      return state;
  }
};

export default ProductFilterReducer;
