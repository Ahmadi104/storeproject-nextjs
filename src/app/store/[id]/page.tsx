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
      <div
        className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10 
        bg-white shadow-xl rounded-2xl p-8"
      >
        <div className="lg:col-span-1">
          <img
            src={data.image}
            alt={data.title}
            className="w-full h-[400px] object-cover rounded-2xl shadow-md"
          />
        </div>

        <div className="lg:col-span-2 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-4 text-slate-800">
              {data.title}
            </h1>
            <p className="text-slate-600 text-base mb-6">{data.describtion}</p>
            <p className="text-2xl font-bold text-sky-600 mb-6">
              Price: ${data.price}
            </p>
          </div>

          <div>
            <IncDicButton id={id} />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Product;
