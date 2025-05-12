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
    <div className="grid grid-cols-12 shadow-lg mb-8">
      <div className="col-span-9 bg-gray-200 p-16">
        <h1 className="text-xl">{data.title}</h1>
        <p>
          Number of product:<span>{qty}</span>
        </p>
        <p>
          Pric:<span>{data.price}</span>
        </p>

        {/* <div className="mt-6">
          <button className="bg-sky-500 px-6 py-1 rounded text-white">+</button>
          <span className="mx-5">{qty}</span>
          <button className="bg-sky-500 px-6 py-1 rounded text-white">-</button>
        </div> */}
        <IncDicButton id={id.toString()} />
      </div>

      <img className="col-span-3" src={data.image} alt="" />
    </div>
  );
}

export default CartItem;
