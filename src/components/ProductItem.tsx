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
    <div className="shadow-md rounded-2xl h-80">
      <img
        src={image}
        alt=""
        className="object-cover w-full h-40 rounded-t-2xl"
      />
      <div className="p-3">
        <h3 className="font-bold">{title}</h3>
        <h6>{describtion}</h6>
        <p>
          cost <span>{price}$</span>
        </p>
      </div>
    </div>
  );
}
