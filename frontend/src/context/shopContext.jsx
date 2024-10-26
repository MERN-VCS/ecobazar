import { createContext } from "react";
import { products } from "../assets/assets";
export const SHOP_CONTEXT = createContext();

export const SHOP_CONTEXT_PROVIDER = (props) => {
  let currency = "$";
  let delivery_fee = "10";
  let value = { products, currency, delivery_fee };
  return (
    <SHOP_CONTEXT.Provider value={value}>
      {props?.children}
    </SHOP_CONTEXT.Provider>
  );
};
