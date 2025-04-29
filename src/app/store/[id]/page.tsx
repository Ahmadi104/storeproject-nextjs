import Container from "@/components/Container";
import React from "react";
import { IProductItemProps } from "@/components/ProductItem";
interface IProductsParams {
  params: Promise<{ id: string }>;
  searchParams: Promise<{}>;
}
async function Product({ params }: IProductsParams) {
  const { id } = await params;
  const results = await fetch(`http://localhost:3001/products/${id}`);
  const data = (await results.json()) as IProductItemProps;

  return (
    <Container>
      <div className=" grid grid-cols-12 mt-8 shadow-2xl">
        <div className="col-span-9 bg-sky-200 p-2 h-48">
          <h1 className="text-bold text-2xl"> Product details 👇</h1>
          <h2 className="font-bold text-bl">{data.title}</h2>
          <p>{data.describtion}</p>
          <p className="font-bold mt-4">
            price <span>{data.price}</span>
          </p>
          <div className="mt-6">
            <button className="bg-sky-500 px-6 py-1 rounded text-white">
              +
            </button>
            <span className="mx-5">3</span>
            <button className="bg-sky-500 px-6 py-1 rounded text-white">
              -
            </button>
          </div>
        </div>
        <div className="col-span-3 bg-gray-200 h-48">
          <img src={data.image} alt="product image" />
        </div>
      </div>
    </Container>
  );
}

export default Product;
