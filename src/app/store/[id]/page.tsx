import Container from "@/components/Container";
import React from "react";
import { IProductItemProps } from "@/components/ProductItem";
import IncDicButton from "@/components/IncDicButton";
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
      <div className=" grid grid-cols-12 mt-8 shadow-xl rounded-md">
        <div className="col-span-9 p-2 h-64">
          <h1 className="text-bold text-2xl"> Product details 👇</h1>
          <h2 className="font-bold text-bl">{data.title}</h2>
          <p>{data.describtion}</p>
          <p className="font-bold mt-4">
            price <span>{data.price}</span>
          </p>
          <IncDicButton id={id} />
        </div>
        <div className="col-span-3 bg-gray-200 h-48">
          <img src={data.image} alt="product image" />
        </div>
      </div>
    </Container>
  );
}

export default Product;
