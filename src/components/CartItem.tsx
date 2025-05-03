import React from "react";

function CartItem() {
  return (
    <div className="grid grid-cols-12 shadow-lg mb-8">
      <div className="col-span-9 bg-gray-200 p-4">
        <h1 className="text-xl">Name of product</h1>
        <p>
          Number of product:<span>3</span>
        </p>
        <p>
          Pric:<span>45</span>
        </p>

        <div className="mt-6">
          <button className="bg-sky-500 px-6 py-1 rounded text-white">+</button>
          <span className="mx-5">3</span>
          <button className="bg-sky-500 px-6 py-1 rounded text-white">-</button>
        </div>
      </div>

      <img
        className="col-span-3"
        src="https://imagekit.io/blog/content/images/2019/12/image-optimization.jpg"
        alt=""
      />
    </div>
  );
}

export default CartItem;
