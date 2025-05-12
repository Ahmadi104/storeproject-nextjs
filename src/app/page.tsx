"use client";

import Link from "next/link";
import React from "react";
import Container from "@/components/Container";

function Home() {
  return (
    <div>
      <Container>
        <div className="text-center mt-36">
          <h1 className="text-4xl font-bold mb-4">Welcome to App Store!</h1>
          <p className="text-lg text-gray-600 mb-8">
            Discover the best products at unbeatable prices. Start shopping now!
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              href="/store"
              className="bg-sky-500 text-white px-6 py-3 rounded hover:bg-sky-700"
            >
              Go to Store
            </Link>
            <Link
              href="/about"
              className="bg-gray-300 text-black px-6 py-3 rounded hover:bg-gray-500 hover:text-white"
            >
              Learn More About Us
            </Link>
            <Link
              href="/cart"
              className="bg-red-400 text-white px-6 py-3 rounded hover:bg-red-700"
            >
              View Your Cart
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Home;
