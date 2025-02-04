import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";

interface IProps {
  listLength: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  itemsPerPage: number;
  currentItemsViewed: number;
}

const PaginationArea = ({
  listLength,
  currentPage,
  setCurrentPage,
  itemsPerPage,
  currentItemsViewed,
}: IProps) => {
  return (
    <Pagination className="flex flex-row justify-between mt-12 gap-4 items-center">
      <span className="text-[20px] text-[#A2A7AF]">
        Showing {currentItemsViewed} Units
      </span>

      <PaginationContent>
        <PaginationItem
          className={`border rounded-full border-[#0512F5] text-[#0512F5] hover:text-[#0512F5] cursor-pointer ${
            currentPage <= 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          aria-disabled={currentPage <= 1}
          onClick={() => {
            if (currentPage > 1) {
              setCurrentPage(currentPage - 1);
            }
          }}
        >
          <PaginationPrevious className="border rounded-full" />
        </PaginationItem>

        {Array.from(
          { length: Math.ceil(listLength / itemsPerPage) },
          (_, i) => i + 1
        ).map((i) => (
          <PaginationItem
            key={i}
            className="border rounded-full cursor-pointer"
          >
            <PaginationLink
              className={`border border-[#0512F5] text-[#0512F5] rounded-full hover:text-[#0512F5] ${
                currentPage === i ? "bg-[#0512F5] text-[#F2DB00]" : ""
              }`}
              onClick={() => setCurrentPage(i)}
            >
              {i}
            </PaginationLink>
          </PaginationItem>
        ))}

        <PaginationItem
          className={`border rounded-full border-[#0512F5] text-[#0512F5] hover:text-[#0512F5] cursor-pointer ${
            currentPage >= Math.ceil(listLength / itemsPerPage)
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
          aria-disabled={currentPage >= Math.ceil(listLength / itemsPerPage)}
          onClick={() => {
            if (currentPage < Math.ceil(listLength / itemsPerPage)) {
              setCurrentPage(currentPage + 1);
            }
          }}
        >
          <PaginationNext className="border rounded-full" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationArea;
