"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import ReactPaginate from "react-paginate";

function Pagination({ pageCount }: { pageCount: number }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const handlePageClick = (e: { selected: number }) => {
    const page = e.selected + 1;
    const currentSearchParams = new URLSearchParams(searchParams.toString());
    currentSearchParams.set("page", page.toString());
    currentSearchParams.set("per_page", "4");
    router.push(`/store?${currentSearchParams.toString()}`);
  };
  return (
    <div>
      <ReactPaginate
        className="flex justify-center items-center gap-6 my-12 text-slate-700"
        nextLabel="Next >"
        previousLabel="< Prev"
        pageRangeDisplayed={3}
        pageCount={pageCount}
        breakLabel="..."
        renderOnZeroPageCount={null}
        onPageChange={handlePageClick}
        activeClassName="bg-sky-600 text-white"
        pageClassName=" border-slate-200 rounded-full px-4 py-2 hover:bg-sky-100 hover:text-sky-600 transition"
        previousClassName="border border-slate-200 rounded-full cursor-pointer px-4 py-2 hover:bg-sky-100 hover:text-sky-600 transition"
        nextClassName="border border-slate-200 rounded-full cursor-pointer px-4 py-2 hover:bg-sky-100 hover:text-sky-600 transition"
        breakClassName="px-3 py-2"
      />
    </div>
  );
}

export default Pagination;
