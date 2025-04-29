"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import React from "react";
import Container from "./Container";
import { title } from "process";

function Navbar() {
  const pathname = usePathname();
  const navLinks = [
    { title: "Home", href: "/" },
    { title: "Store", href: "/store" },
    { title: "About", href: "/about" },
    { title: "cart", href: "/cart" },
  ];
  return (
    <nav className="shadow p-4 bg-gray">
      <Container>
        <div className="flex flex-row-reverse">
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
      </Container>
    </nav>
  );
}

export default Navbar;
