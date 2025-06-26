"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

function Search() {
  const [search, setSearch] = useState("");
  const searchParams = useSearchParams();
  const router = useRouter();
  const handleSearch = () => {
    const currentSearchParams = new URLSearchParams(searchParams.toString());
    currentSearchParams.set("title", search);
    router.push(`/store?${currentSearchParams.toString()}`);
  };
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-4 my-8">
      <input
        type="text"
        placeholder="Search product title..."
        className="w-[90%] md:w-[600px] px-6 py-3 bg-slate-200 rounded-full 
    focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm transition"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        onClick={handleSearch}
        className="flex items-center gap-2 bg-sky-500 hover:bg-sky-600 
    text-white px-6 py-3 rounded-full shadow-md transition"
      >
        <FiSearch className="text-xl" />
        Search
      </button>
    </div>
  );
}

export default Search;
