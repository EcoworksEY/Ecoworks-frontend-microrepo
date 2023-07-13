import React from "react";
import CartProduct from "./CartProduct";

const CartProductList = (props) => {
  return (
    <div>
      {props.productsList.map((data, index) => (
        <CartProduct
          key = {index}
          id={data.id}
          image={data.image}
          title={data.title}
          price={data.price}
          category={data.category}
          colors={data.colors}
          quantity={data.quantity}
          increaseQuantity={props.increaseQuantity}
          decreaseQuantity={props.decreaseQuantity}
          onClickDelete={props.onClickDelete}
        />
      ))}
    </div>
  );
};

export default CartProductList;
