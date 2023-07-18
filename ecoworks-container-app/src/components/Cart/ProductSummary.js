import React, {useState, useEffect} from "react";
import UpperSmallTextDark from "..//Common/UpperSmallTextDark";
import CartProductList from "./CartProductList";
import AccountBanner from "./AccountBanner";
import ShippingCalculator from "./ShippingCalculator";

const ProductSummary = (props) => {
  /* DYNAMIC PRODUCT LIST -> That will updated dynamically */
  const [isCartEmpty, setIsCartEmpty] = useState(false);

  useEffect(() => {
    if (props.productsList.length > 0) {
      setIsCartEmpty(false);
    } else {
      setIsCartEmpty(true);
    }
  }, [props.productsList]);

  return (
    <div className="w-4/6 bg-white mr-5 p-7">
      <div className={`${isCartEmpty ? "closed" : "flex justify-between"}`}>
        <div className="w-1/2">
          <UpperSmallTextDark text="product" />
        </div>
        <div className="w-1/2 flex justify-center">
          <div className="w-14 -ml-8">
            <UpperSmallTextDark text="price" />
          </div>
          <div className="w-14 mx-20 text-center">
            <UpperSmallTextDark text="qty" />
          </div>
          <div className="w-14">
            <UpperSmallTextDark text="subtotal" />
          </div>
        </div>
      </div>
      <div className={`${isCartEmpty ? "closed" : "border border-rgba(184, 179, 179, 0.82)"}`}></div>
      <CartProductList
        productsList={props.productsList}
        increaseQuantity={props.increaseQuantity}
        decreaseQuantity={props.decreaseQuantity}
        onClickDelete={props.onClickDelete}
        isCartEmpty={isCartEmpty}
      />
      <AccountBanner onClickSignIn={props.onClickSignIn} />
      <ShippingCalculator
        updateShippingCost={props.updateShippingCost}
        SHIPPING_PRICE_STANDARD={props.SHIPPING_PRICE_STANDARD}
        SHIPPING_PRICE_EXPRESS={props.SHIPPING_PRICE_EXPRESS}
      />
    </div>
  );
};

export default ProductSummary;
