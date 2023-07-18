const cartReducer = (state, action) => {
    if (action.type === "ADD_TO_CART") {
      let { id, selectedColour, quantity, props } = action.payload;
  
      // tackle the existing product
  
      let existingProduct = state.cart.find(
        (curItem) => curItem.id === (id + selectedColour.code)
      );
  
      if (existingProduct) {
        let updatedProduct = state.cart.map((curElem) => {
          if (curElem.id === (id + selectedColour.code)) {
            let newQuantity = curElem.quantity + quantity;
  
            // if (newQuantity >= curElem.max) {
            //   newQuantity = curElem.max;
            // }
            return {
              ...curElem,
              quantity: newQuantity,
            };
          } else {
            return curElem;
          }
        });
        return {
          ...state,
          cart: updatedProduct,
        };
      } else {
        let cartProduct = {
          id: id+selectedColour.code,
          productId: id,
          title: props.title,
          colors: props.colours,
          selectedColour: selectedColour,
          quantity: quantity,
          category: props.category,
          image: props.images[0],
          price: props.price,
        };
        console.log(cartProduct);
  
        return {
          ...state,
          cart: [...state.cart, cartProduct],
        };
      }
    }
  
    // to set the increment and decrement
    if (action.type === "SET_DECREMENT") {
      let updatedProduct = state.cart.map((curElem) => {
        if (curElem.id === action.payload) {
          let decQuantity = curElem.quantity - 1;
  
          if (decQuantity <= 1) {
            decQuantity = 1;
          }
  
          return {
            ...curElem,
            quantity: decQuantity,
          };
        } else {
          return curElem;
        }
      });
      return { ...state, cart: updatedProduct };
    }
  
    if (action.type === "SET_INCREMENT") {
      let updatedProduct = state.cart.map((curElem) => {
        if (curElem.id === action.payload) {
          let incQuantity = curElem.quantity + 1;
  
          if (incQuantity >= curElem.max) {
            incQuantity = curElem.max;
          }
  
          return {
            ...curElem,
            quantity: incQuantity,
          };
        } else {
          return curElem;
        }
      });
      return { ...state, cart: updatedProduct };
    }
  
    if (action.type === "REMOVE_ITEM") {
      let updatedCart = state.cart.filter(
        (curItem) => curItem.id !== action.payload
      );
      return {
        ...state,
        cart: updatedCart,
      };
    }
  
    // to empty or to clear to cart
    if (action.type === "CLEAR_CART") {
      return {
        ...state,
        cart: [],
      };
    }

    if (action.type === "SET_COLOUR") {
      let { id, selectedColour} = action.payload;
      let updatedProduct = state.cart.map((curElem) => {
        if (curElem.id === id) {
  
          return {
            ...curElem,
            selectedColour: selectedColour,
          };
        } else {
          return curElem;
        }
      });
      return { ...state, cart: updatedProduct };
    }
  
    // if (action.type === "CART_TOTAL_ITEM") {
    //   let updatedItemVal = state.cart.reduce((initialVal, curElem) => {
    //     let { quantity } = curElem;
  
    //     initialVal = initialVal + quantity;
    //     return initialVal;
    //   }, 0);
  
    //   return {
    //     ...state,
    //     total_item: updatedItemVal,
    //   };
    // }
  
    // if (action.type === "CART_TOTAL_PRICE") {
    //   let total_price = state.cart.reduce((initialVal, curElem) => {
    //     let { price, quantity } = curElem;
  
    //     initialVal = initialVal + price * quantity;
  
    //     return initialVal;
    //   }, 0);
  
    //   return {
    //     ...state,
    //     total_price,
    //   };
    // }
  
    // if (action.type === "CART_ITEM_PRICE_TOTAL") {
    //   let { total_item, total_price } = state.cart.reduce(
    //     (accum, curElem) => {
    //       let { price, quantity } = curElem;
  
    //       accum.total_item += quantity;
    //       accum.total_price += price * quantity;
  
    //       return accum;
    //     },
    //     {
    //       total_item: 0,
    //       total_price: 0,
    //     }
    //   );
    //   return {
    //     ...state,
    //     total_item,
    //     total_price,
    //   };
    // }
}
  
  
  export default cartReducer;