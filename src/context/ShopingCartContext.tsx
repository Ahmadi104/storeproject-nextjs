"use client";
import { createContext, useContext, useState } from "react";

type shoppingCartContextProviderProps = {
  children: React.ReactNode;
};
type CartItems = {
  id: number;
  qty: number;
};
type TShoppingCartContext = {
  cartItems: CartItems[];
  handleIncreaseProductQty: (id: number) => void;
  IncreaseProductQty: (id: number) => number;
  cartTotalQty:number;
};

const ShoppingCartContext = createContext({} as TShoppingCartContext);

//make a custome hook
export const useShoppingCartContext = () => {
  return useContext(ShoppingCartContext);
};

export function ShoppingCartContextProvider({
  children,
}: shoppingCartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItems[]>([]);
  // sum all product that you added to cart
  const cartTotalQty = cartItems.reduce((Total, item) => {
    return Total + item.qty;
  }, 0);
  //icrease any product that you want to by(how many)
  const IncreaseProductQty = (id: number) => {
    return cartItems.find((item) => item.id == id)?.qty || 0;
  };
  //
  const handleIncreaseProductQty = (id: number) => {
    setCartItems((currentItem) => {
      let isNotProductExist = currentItem.find((item) => item.id == id) == null;
      if (isNotProductExist) {
        return [...currentItem, { id: id, qty: 1 }];
      } else {
        return currentItem.map((item) => {
          if (item.id == id) {
            return {
              ...item,
              qty: item.qty + 1,
            };
          } else {
            return item;
          }
        });
      }
    });
  };
  return (
    <ShoppingCartContext.Provider
      value={{ cartItems, handleIncreaseProductQty, IncreaseProductQty,cartTotalQty }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
