import React from "react";
export interface IProductItemProps {
  id: string;
  title: string;
  describtion: string;
  price: number;
  image: string;
}

export default function ProductItem({
  image,
  describtion,
  title,
  price,
}: IProductItemProps) {
  return (
    <div className="shadow-md rounded-2xl">
      <img src={image} alt="" />
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
