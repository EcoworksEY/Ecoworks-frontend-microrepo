import React, { useState, useEffect } from "react";

import Cross from "../../../assets/Navigation/VectorCross.svg";
import Heart from "../../../assets/VectorFavorite.svg";

import "./AddToCart.css";
import LargeTextDark from "../LargeTextDark";
import AddToWishlistProduct from "./AddToWishlistProduct";
import {useWishlistContext } from "../../../context/WishlistContext"

// WILL TAKE PROPS.TYPE as an inpuit and have button type based on that

//EXPECTED PROPS -->
// type="icon" id = {product.id} quantity = {1} selectedColour = {product.colours[0]} product={product}
const AddToWishlist = (props) => {
  const { wishlist, removeItem, addToWishlist } = useWishlistContext();
  const [wishlistDisplayed, setWishlistDisplayed] = useState(false);
  const handlePopupClose = () => {
    setWishlistDisplayed(false);
  };
  
  let handlePopupOpen;
  if (props.type === "icon-onlyToOpen") {
    handlePopupOpen = () => {setWishlistDisplayed(true);}
  } else {
    handlePopupOpen = () => {
      addToWishlist(props.id, props.selectedColour, props.quantity, props.product);
      setWishlistDisplayed(true);
      setTimeout(() => {
        setWishlistDisplayed(false);
      }, 5000);
    };
  }

  const onClickDelete = (id) => {
    removeItem(id);
  };

  let loadingData = "";
  if (props.type === "icon-onlyToOpen") {
    loadingData = (
      <img
        className="navbar_ecoworks_blog_logo"
        src={Heart}
        alt=""
        onClick={() => handlePopupOpen()}
      />
    );
  } else if (props.type === "icon") {
    loadingData = (
      <img
        className="product_icon_shopping_bag"
        src={Heart}
        alt=""
        onClick={() => handlePopupOpen()}
      />
    );
  }

  return (
    <div>
      {loadingData}
      <div className={`${wishlistDisplayed ? "wishlist_popup_container" : "closed"}`}>
        <div className="flex justify-between">
          <LargeTextDark text="Wishlist" />
          <img
            className="cursor-pointer"
            src={Cross}
            alt=""
            onClick={() => handlePopupClose()}
          ></img>
        </div>
        {wishlist.map((data, index) => (
          <AddToWishlistProduct
            key={data.id}
            id={data.id}
            images={[data.image]}
            title={data.title}
            price={data.price}
            category={data.category}
            colours={data.colours}
            quantity={data.quantity}
            selectedColour={data.selectedColour}
            onClickDelete={onClickDelete}
            productId={data.productId}
            setWishlistDisplayed={setWishlistDisplayed}
          />
        ))}
        
      </div>
    </div>
  );
};

export default AddToWishlist;
