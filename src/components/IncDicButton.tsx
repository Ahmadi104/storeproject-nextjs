"use client";
import React from "react";
import { useShoppingCartContext } from "@/context/ShopingCartContext";
interface IIncDicProps {
  id: string;
}
function IncDicButton({ id }: IIncDicProps) {
  const {
    cartItems,
    handleIncreaseProductQty,
    IncreaseProductQty,
    handleDecreaseProductQty,
    handleRemoveProduct,
  } = useShoppingCartContext();
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
      <button
        onClick={() => handleDecreaseProductQty(parseInt(id))}
        className="bg-sky-500 px-6 py-1 rounded text-white"
      >
        -
      </button>
      <div>
        <button
          onClick={() => handleRemoveProduct(parseInt(id))}
          className="bg-red-400 px-8 py-2 mt-2 rounded text-white hover:bg-red-600"
        >
          Delete Product
        </button>
      </div>
    </div>
  );
}

export default IncDicButton;
