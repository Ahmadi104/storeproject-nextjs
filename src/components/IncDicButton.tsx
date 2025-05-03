"use client";
import React from "react";
import { useShoppingCartContext } from "@/context/ShopingCartContext";
interface IIncDicProps {
  id: string;
}
function IncDicButton({ id }: IIncDicProps) {
  const { cartItems, handleIncreaseProductQty, IncreaseProductQty } =
    useShoppingCartContext();
  // console.log(cartItems);
  return (
    <div className="mt-6">
      <button
        onClick={() => handleIncreaseProductQty(parseInt(id))}
        className="bg-sky-500 px-6 py-1 rounded text-white"
      >
        +
      </button>
      <span className="mx-5">{IncreaseProductQty(parseInt(id))}</span>
      <button className="bg-sky-500 px-6 py-1 rounded text-white">-</button>
    </div>
  );
}

export default IncDicButton;
