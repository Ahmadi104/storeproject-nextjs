"use client";
import { createContext, useContext, useEffect, useState } from "react";

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
  cartTotalQty: number;
  handleDecreaseProductQty: (id: number) => void;
  handleRemoveProduct: (id: number) => void;
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
  //
  const IncreaseProductQty = (id: number) => {
    return cartItems.find((item) => item.id == id)?.qty || 0;
  };
  //
  const handleIncreaseProductQty = (id: number) => {
    setCartItems((currentItems) => {
      let isNotProductExist =
        currentItems.find((item) => item.id == id) == null;
      if (isNotProductExist) {
        return [...currentItems, { id: id, qty: 1 }];
      } else {
        return currentItems.map((item) => {
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
  //
  const handleDecreaseProductQty = (id: number) => {
    setCartItems((currentItems) => {
      let isLastOne = currentItems.find((item) => item.id == id)?.qty == 1;
      if (isLastOne) {
        return currentItems.filter((item) => item.id != id);
      } else {
        return currentItems.map((item) => {
          if (item.id == id) {
            return { ...item, qty: item.qty - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const handleRemoveProduct = (id: number) => {
    setCartItems((currentItems) => {
      return currentItems.filter((item) => item.id !== id);
    });
  };

  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItem", JSON.stringify(cartItems));
  }, [cartItems]);
  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems,
        handleIncreaseProductQty,
        IncreaseProductQty,
        cartTotalQty,
        handleDecreaseProductQty,
        handleRemoveProduct,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
