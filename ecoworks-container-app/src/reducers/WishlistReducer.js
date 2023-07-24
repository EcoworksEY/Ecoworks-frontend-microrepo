const wishlistReducer = (state, action) => {
    if (action.type === "ADD_TO_WISHLIST") {
      let { id, selectedColour, quantity, props } = action.payload;
  
      // tackle the existing product
  
      let existingProduct = state.wishlist.find(
        (curItem) => curItem.id === (id + selectedColour.code)
      );
  
      if (existingProduct) {
        let updatedProduct = state.wishlist.map((curElem) => {
          if (curElem.id === (id + selectedColour.code)) {
            let newQuantity = curElem.quantity + quantity;
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
          wishlist: updatedProduct,
        };
      } else {
        let wishlistProduct = {
          id: id+selectedColour.code,
          productId: id,
          title: props.title,
          colours: props.colours,
          selectedColour: selectedColour,
          quantity: quantity,
          category: props.category,
          image: props.images[0],
          price: props.price,
        };
  
        return {
          ...state,
          wishlist: [...state.wishlist, wishlistProduct],
        };
      }
    }
  
    // to set the increment and decrement
  
    if (action.type === "REMOVE_ITEM") {
      let updatedWishlist = state.wishlist.filter(
        (curItem) => curItem.id !== action.payload
      );
      return {
        ...state,
        wishlist: updatedWishlist,
      };
    }
  
    // to empty or to clear to wishlist
    if (action.type === "CLEAR_CART") {
      return {
        ...state,
        wishlist: [],
      };
    }
}
  
  
  export default wishlistReducer;