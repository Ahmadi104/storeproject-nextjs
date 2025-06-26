"use client";
import React from "react";
import { FiPlus, FiMinus, FiTrash2 } from "react-icons/fi";
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

  return (
    <div className="mt-6 flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <button
          onClick={() => handleIncreaseProductQty(parseInt(id))}
          className="flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white rounded-md 
          px-5 py-2 shadow-md transition active:scale-95"
        >
          <FiPlus />
          Increase
        </button>

        <span className="text-lg font-semibold text-slate-800">
          {IncreaseProductQty(parseInt(id))}
        </span>

        <button
          onClick={() => handleDecreaseProductQty(parseInt(id))}
          className="flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white rounded-md
          px-5 py-2 shadow-md transition active:scale-95"
        >
          <FiMinus />
          Decrease
        </button>
        <button
          onClick={() => handleRemoveProduct(parseInt(id))}
          className="flex items-center gap-2 bg-red-500 hover:bg-red-600 
        text-white px-3 py-2 rounded-md shadow-md transition active:scale-95"
        >
          <FiTrash2 />
          Delete Product
        </button>
      </div>
    </div>
  );
}

export default IncDicButton;
