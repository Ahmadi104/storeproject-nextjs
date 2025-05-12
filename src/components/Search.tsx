"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

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
    <div className="my-8 mx-auto">
      <input
        type="text"
        placeholder="search product"
        className="p-2 bg-gray-100 rounded-3xl w-[900px]"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        className="bg-sky-500 px-4 py-2 rounded-md text-white ml-4"
        onClick={handleSearch}
      >
        search
      </button>
    </div>
  );
}

export default Search;
