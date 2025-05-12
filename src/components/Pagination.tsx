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
        className=" rounded-md text-xl my-8 flex gap-8 hover:cursor-pointer"
        nextLabel="next >"
        pageCount={pageCount}
        onPageChange={handlePageClick}
        breakLabel="..."
        previousLabel="< previous"
        pageRangeDisplayed={5}
        renderOnZeroPageCount={null}
      />
    </div>
  );
}

export default Pagination;
