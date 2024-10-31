import { createContext, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
export const SHOP_CONTEXT = createContext();

export const SHOP_CONTEXT_PROVIDER = (props) => {
  let [cartItems, setCartItems] = useState({});
  let currency = "$";
  let delivery_fee = "10";

  let addToCart = (e, id, size) => {
    e.preventDefault();
    if (!size) {
      toast.error("Please Select Size.");
      return false;
    }
    let clonedCart = structuredClone(cartItems);
    if (clonedCart[id]) {
      if (clonedCart[id][size]) {
        clonedCart[id][size] += 1;
      } else {
        clonedCart[id][size] = 1;
      }
    } else {
      clonedCart[id] = {};
      clonedCart[id][size] = 1;
    }
    setCartItems(clonedCart);
  };
  console.log(cartItems);
  let value = { products, currency, delivery_fee, addToCart };
  return (
    <SHOP_CONTEXT.Provider value={value}>
      {props?.children}
    </SHOP_CONTEXT.Provider>
  );
};
