import React from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

export default function Pagination({ dataPerPage, totalData, paginate, prev, next, currentPage }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="ml-auto flex gap-x-3 py-5 pr-3">
      <p
        className={`px-2 py-2 flex flex-row items-center gap-x-2 cursor-pointer ${currentPage === 1 && "text-gray-disabledText"}`}
        onClick={() => {
          prev();
        }}
      >
        <IoChevronBack />
        Prev
      </p>
      {pageNumbers.map((number) => (
        <p onClick={() => paginate(number)} className={`text-black px-2 py-2 cursor-pointer ${number === currentPage && "font-bold"}`}>
          {number}
        </p>
      ))}
      <p
        className={`px-2 py-2 flex flex-row items-center gap-x-2 cursor-pointer ${currentPage === pageNumbers.length && "text-gray-disabledText"}`}
        onClick={() => {
          next(pageNumbers);
        }}
      >
        Next
        <IoChevronForward />
      </p>
    </div>
  );
}
