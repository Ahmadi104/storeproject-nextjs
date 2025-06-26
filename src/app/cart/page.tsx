"use client";
import CartItem from "@/components/CartItem";
import Container from "@/components/Container";
import { IProductItemProps } from "@/components/ProductItem";
import { useShoppingCartContext } from "@/context/ShopingCartContext";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { formatNumberWithCammas } from "@/utils/number";
import { FiShoppingCart } from "react-icons/fi";

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
    axios("http://localhost:3001/products").then((result) => {
      setData(result.data);
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
        if (data.length > 0) {
          const discountAmount = (totalPrice * data[0].percentage) / 100;
          const finalPrice = totalPrice - discountAmount;
          setDiscoundPrice(discountAmount);
          setFinalPrice(finalPrice);
        } else {
          setDiscoundPrice(0);
          setFinalPrice(totalPrice);
          alert("Invalid discount code ❌");
        }
      }
    );
  };

  return (
    <Container>
      <div className="flex flex-col gap-6 my-8">
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>

      <div
        className="shadow-lg shadow-gray-300 bg-white p-8 rounded-2xl 
        flex flex-col gap-4 w-full max-w-xl mx-auto"
      >
        <h1 className="my-8 text-3xl font-bold flex items-center gap-2">
          <FiShoppingCart className="text-xl" /> Your Shopping Cart
        </h1>
        <h3 className="text-xl font-semibold">
          Total Price:
          <span className="text-sky-600 font-bold ml-2">
            {formatNumberWithCammas(totalPrice)}$
          </span>
        </h3>

        <h3 className="text-xl font-semibold">
          Your Profit:
          <span className="text-green-600 font-bold ml-2">
            {formatNumberWithCammas(discoundPrice)}$
          </span>
        </h3>

        <h3 className="text-xl font-semibold">
          Final Price:
          <span className="text-rose-600 font-bold ml-2">
            {formatNumberWithCammas(finalPrice || totalPrice)}$
          </span>
        </h3>

        <div className="flex gap-4">
          <input
            type="text"
            className="flex-1 border border-slate-300 rounded-full bg-slate-100 
            px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
            placeholder="Enter discount code"
            onChange={(e) => setDiscoundCode(e.target.value)}
          />
          <button
            onClick={handleSubmitDiscound}
            className="bg-sky-500 hover:bg-sky-600 text-white 
            px-6 py-2 rounded-full shadow-md transition active:scale-95"
          >
            Apply
          </button>
        </div>
      </div>
    </Container>
  );
}

export default Cart;
