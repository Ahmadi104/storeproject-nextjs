"use client";
import Link from "next/link";
import { redirect, usePathname } from "next/navigation";

import React from "react";
import Container from "./Container";
import { useShoppingCartContext } from "@/context/ShopingCartContext";
import Cookies from "js-cookie";

function Navbar() {
  const { cartTotalQty } = useShoppingCartContext();
  const pathname = usePathname();
  const navLinks = [
    { title: "Home", href: "/" },
    { title: "Store", href: "/store" },
    { title: "About", href: "/about" },
    { title: "Dashboard", href: "/dashboard" },
    { title: "Login", href: "/login" },
  ];
  return (
    <nav className="shadow p-4 bg-gray">
      <Container>
        <div className="flex justify-between items-center">
          <div>
            <Link
              href="/cart"
              className="bg-sky-200 p-2 mr-8 rounded hover:bg-sky-600 hover:text-white"
            >
              Shopping Cart
            </Link>
            Total of Products :
            <span className=" rounded-full ml-2 px-3 py-2">{cartTotalQty}</span>
          </div>
          <div className="ml-auto flex space-x-12">
            {navLinks.map((item) => (
              <Link
                href={item.href}
                key={item.href}
                className={`mr-12 ${
                  pathname === item.href ? "text-sky-700" : ""
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
          >
            Logout
          </button>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
