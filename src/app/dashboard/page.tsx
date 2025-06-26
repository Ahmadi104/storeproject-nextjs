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
    axios({
      method: "POST",
      url: "http://localhost:3001/products",
      data: {
        id: Math.floor(Math.random() * 10000).toString(),
        title: newProduct.title,
        describtion: newProduct.description,
        price: newProduct.price,
        image: newProduct.image,
      },
    }).then(() => {
      alert("✅ Product created successfully!");
      setNewProduct({
        title: "",
        price: "",
        image: "",
        description: "",
      });
    });
  };

  return (
    <Container>
      <div className="max-w-3xl mx-auto mt-10 bg-white shadow-xl rounded-2xl p-8">
        <h1 className="text-3xl font-bold mb-8 text-slate-800 text-center">
          Create Your New Product
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            name="title"
            placeholder="Title"
            className="p-3 border rounded-xl bg-slate-50 focus:outline-none focus:ring-2 focus:ring-sky-500"
            onChange={handleChangeProduct}
            value={newProduct.title}
          />
          <input
            type="text"
            name="price"
            placeholder="Price"
            className="p-3 border rounded-xl bg-slate-50 focus:outline-none focus:ring-2 focus:ring-sky-500"
            onChange={handleChangeProduct}
            value={newProduct.price}
          />
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            className="p-3 border rounded-xl bg-slate-50 focus:outline-none focus:ring-2 focus:ring-sky-500"
            onChange={handleChangeProduct}
            value={newProduct.image}
          />
        </div>

        <textarea
          placeholder="Description"
          name="description"
          className="w-full my-6 p-3 border rounded-xl bg-slate-50 focus:outline-none focus:ring-2 focus:ring-sky-500"
          onChange={handleChangeProduct}
          value={newProduct.description}
        ></textarea>

        <button
          onClick={handleCreateProduct}
          className="bg-sky-500 hover:bg-sky-600 text-white py-3 px-6 rounded-xl 
          shadow-md transition active:scale-95 block mx-auto"
        >
          Create Product
        </button>
      </div>
    </Container>
  );
}

export default Dashboard;
