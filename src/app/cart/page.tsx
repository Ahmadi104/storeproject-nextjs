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
    </Container>
  );
}

export default Cart;
