"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import React from "react";
import Container from "./Container";
import { useShoppingCartContext } from "@/context/ShopingCartContext";

function Navbar() {
  const { cartTotalQty } = useShoppingCartContext();
  const pathname = usePathname();
  const navLinks = [
    { title: "Home", href: "/" },
    { title: "Store", href: "/store" },
    { title: "About", href: "/about" },
  ];
  return (
    <nav className="shadow p-4 bg-gray">
      <Container>
        <div className="flex justify-between">
          <div>
            {navLinks.map((item) => (
              <Link
                href={item.href}
                key={item.href}
                className={`mr-12 ${
                  pathname === item.href ? "text-sky-500" : ""
                }`}
              >
                {item.title}
              </Link>
            ))}
          </div>
          <div>
            <Link
              href="/cart"
              className="bg-sky-200 p-2 mr-8 rounded hover:bg-sky-600 hover:text-white"
            >
              By product
            </Link>
            Total of Products :
            <span className="bg-red-400 rounded-full ml-2 text-white px-3 py-2">
              {cartTotalQty}
            </span>
          </div>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
