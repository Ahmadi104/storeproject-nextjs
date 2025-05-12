"use client";
import CartItem from "@/components/CartItem";
import Container from "@/components/Container";
import { IProductItemProps } from "@/components/ProductItem";
import { useShoppingCartContext } from "@/context/ShopingCartContext";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { formatNumberWithCammas } from "@/utils/number";

interface IDiscoundData {
  id: number;
  code: string;
  percentage: number;
}
function Cart() {
  const { cartItems } = useShoppingCartContext();
  const [data, setData] = useState<IProductItemProps[]>([]);

  const [discoundCode, setDiscoundCode] = useState("");
  const [finalPrice, setFinalPrice] = useState(0);
  const [discoundPrice, setDiscoundPrice] = useState(0);
  useEffect(() => {
    axios("http://localhost:3001/products").then((resutl) => {
      const { data } = resutl;
      setData(data);
    });
  }, []);

  const totalPrice = cartItems.reduce((total, item) => {
    const selectedProduct = data.find(
      (product) => product.id == item.id.toString()
    );
    return total + (selectedProduct?.price || 0) * item.qty;
  }, 0);

  const handleSubmitDiscound = () => {
    axios(`http://localhost:3001/discounds?code=${discoundCode}`).then(
      (result) => {
        const data = result.data as IDiscoundData[];
        const discoundPrice = totalPrice + data[0].percentage / 100;
        const finalPrice = totalPrice - discoundPrice;
        setDiscoundPrice(discoundPrice);
        setFinalPrice(finalPrice);
      }
    );
  };
  return (
    <Container>
      <h1 className="my-8 text-2xl">Your Shopping Cart</h1>
      <div className=" my-8 ">
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
      <div className=" shadow-md p-8">
        <h3>
          Total Price:
          <span>{totalPrice}$</span>
        </h3>
        <h3>
          Your Profit: <span>{formatNumberWithCammas(discoundPrice)}$</span>
        </h3>
        <h3>
          Final Pirce: <span>{formatNumberWithCammas(finalPrice)}$</span>
        </h3>
        <input
          type="text"
          className="border rounded bg-gray-200 p-1"
          placeholder="inser your discound code"
          onChange={(e) => setDiscoundCode(e.target.value)}
        />
        <button
          onClick={handleSubmitDiscound}
          className="bg-sky-500 rounded-md py-1 px-8 ml-2 text-white"
        >
          Do
        </button>
      </div>
    </Container>
  );
}

export default Cart;
