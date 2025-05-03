import CartItem from "@/components/CartItem";
import Container from "@/components/Container";
import React from "react";

function Cart() {
  return (
    <Container>
      <h1 className="my-8">Cart</h1>
      <div className=" my-8 ">
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
      <div className="bg-gray-100 border shadow-md p-4">
        <h3>
          Total Price: <span>70$</span>
        </h3>
        <h3>
          Your Profit: <span>30$</span>
        </h3>
        <h3>
          Final Pirce: <span>40$</span>
        </h3>
        <input
          type="text"
          className="border rounded bg-gray-200"
          placeholder="inser your discound code"
        />
        <button className="bg-sky-500 rounded-md py-1 px-8 ml-2 text-white">
          Do
        </button>
      </div>
    </Container>
  );
}

export default Cart;
