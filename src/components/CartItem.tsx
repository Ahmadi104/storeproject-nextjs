import axios from "axios";
import React, { useEffect, useState } from "react";
import { IProductItemProps } from "./ProductItem";
import IncDicButton from "./IncDicButton";
interface ICartItemProps {
  id: number;
  qty: number;
}

function CartItem({ id, qty }: ICartItemProps) {
  const [data, setData] = useState({} as IProductItemProps);
  useEffect(() => {
    axios(`http://localhost:3001/products/${id}`).then((result) => {
      const { data } = result;
      setData(data);
    });
  }, [id]);
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center bg-red-400 rounded-2xl shadow-md p-4 md:p-8 mb-8">
      <div className="md:col-span-9 space-y-4">
        <h1 className="text-2xl font-bold">{data.title}</h1>
        <p className="text-gray-600">
          Quantity: <span className="font-semibold">{qty}</span>
        </p>
        <p className="text-gray-600">
          Price: <span className="font-semibold">${data.price}</span>
        </p>
        <IncDicButton id={id.toString()} />
      </div>

      <div className="md:col-span-3 flex justify-center">
        <img
          src={data.image}
          alt={data.title}
          className="object-contain h-40 w-40 md:h-60 md:w-60 rounded-xl"
        />
      </div>
    </div>
  );
}

export default CartItem;
