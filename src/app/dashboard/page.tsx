"use client";
import Container from "@/components/Container";
import axios from "axios";
import { ChangeEvent, useState } from "react";

function Dashboard() {
  const [newProduct, setNewProduct] = useState({
    title: "",
    price: "",
    image: "",
    description: "",
  });

  const handleChangeProduct = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value, name } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: value,
    });
  };

  const handleCreateProduct = () => {
    console.log(newProduct);
    axios({
      method: "POST",
      url: "http://localhost:3001/products",
      data: {
        id: Math.floor(Math.random() * 1000).toString(),
        title: newProduct.title,
        describtion: newProduct.description,
        price: newProduct.price,
        image: newProduct.image,
      },
    });
  };
  return (
    <Container>
      <div className="grid grid-cols-3 gap-4 my-8">
        <input
          type="text"
          name="title"
          placeholder="title"
          className="p-2 border-1 rounded-lg"
          onChange={handleChangeProduct}
        />
        <input
          type="text"
          name="price"
          placeholder="price"
          className="p-2 border-1 rounded-lg"
          onChange={handleChangeProduct}
        />
        <input
          type="text"
          name="photo"
          placeholder="photo"
          className="p-2 border-1 rounded-lg"
          onChange={handleChangeProduct}
        />
      </div>
      <textarea
        placeholder="description"
        name="description"
        className="w-full my-4 p-2 border-1 rounded-lg"
        onChange={handleChangeProduct}
      ></textarea>
      <button
        onClick={handleCreateProduct}
        className="bg-sky-500 text-white py-2 px-5 rounded-md hover:bg-sky-600"
      >
        creat new product
      </button>
    </Container>
  );
}
export default Dashboard;
