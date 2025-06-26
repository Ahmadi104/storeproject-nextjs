import React from "react";
export interface IProductItemProps {
  id: string;
  title: string;
  describtion: string;
  price: number;
  image: string;
}
export interface IProductList {
  first: number | null;
  items: number | null;
  last: number | null;
  next: number | null;
  pages: number;
  prev: number | null;
  data: IProductItemProps[];
}

export default function ProductItem({
  image,
  describtion,
  title,
  price,
}: IProductItemProps) {
  return (
    <div
      className="bg-white py-4 rounded-2xl shadow-md hover:shadow-xl 
      transition transform hover:scale-[1.02] flex flex-col"
    >
      <img
        src={image}
        alt={title}
        className="object-cover w-full h-48 rounded-t-2xl"
      />

      <div className="p-4 py-4 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="font-semibold text-lg text-slate-900 mb-2">{title}</h3>
          <p className="text-slate-600 text-sm mb-4">{describtion}</p>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-sky-600 font-bold text-lg">${price}</span>
          <button
            className="bg-sky-400 hover:bg-sky-600 text-white px-4 py-2 
            rounded-xl shadow-md transition active:scale-95"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
