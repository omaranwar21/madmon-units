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
}

const PaginationArea = ({
  listLength,
  currentPage,
  setCurrentPage,
  itemsPerPage,
}: IProps) => {
  return (
    <Pagination className="flex flex-row justify-end mt-12 gap-4">
      <PaginationContent>
        <PaginationItem
          className="border rounded-full border-[#0512F5] text-[#0512F5] hover:text-[#0512F5] cursor-pointer"
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          <PaginationPrevious href="#" className="border rounded-full" />
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
        <PaginationItem className="border rounded-full border-[#0512F5] text-[#0512F5] hover:text-[#0512F5] cursor-pointer">
          <PaginationNext
            href="#"
            className="border rounded-full"
            onClick={() => setCurrentPage(currentPage + 1)}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationArea;
