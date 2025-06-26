"use client";
import Link from "next/link";
import { redirect, usePathname } from "next/navigation";
import React from "react";
import Container from "./Container";
import { useShoppingCartContext } from "@/context/ShopingCartContext";
import Cookies from "js-cookie";
import { FiShoppingCart } from "react-icons/fi";

function Navbar() {
  const { cartTotalQty } = useShoppingCartContext();
  const pathname = usePathname();

  const navLinks = [
    { title: "Home", href: "/" },
    { title: "Store", href: "/store" },
    { title: "About", href: "/about" },
    { title: "Creat Product", href: "/dashboard" },
    { title: "Login", href: "/login" },
  ];

  return (
    <nav className="shadow-md bg-white">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 py-4">
          <div className="flex items-center gap-4">
            <Link
              href="/cart"
              className="flex items-center gap-2 bg-sky-100 text-sky-700 
                         px-4 py-2 rounded-xl hover:bg-sky-600 hover:text-white transition"
            >
              <FiShoppingCart className="text-xl" />
              Cart
            </Link>

            <div className="flex items-center gap-2">
              <span className="text-slate-700">Total:</span>
              <span className="bg-sky-500 text-white rounded-full px-3 py-1 text-sm font-semibold">
                {cartTotalQty}
              </span>
            </div>
          </div>

          <div className="flex gap-8">
            {navLinks.map((item) => (
              <Link
                href={item.href}
                key={item.href}
                className={`text-slate-800 hover:text-sky-600 transition ${
                  pathname === item.href ? "text-sky-800 font-semibold" : ""
                }`}
              >
                {item.title}
              </Link>
            ))}
          </div>

          <button
            onClick={() => {
              Cookies.remove("token");
              redirect("/login");
            }}
            className="bg-red-100 text-red-600 px-4 py-2 rounded-xl hover:bg-red-600 hover:text-white transition"
          >
            Logout
          </button>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
