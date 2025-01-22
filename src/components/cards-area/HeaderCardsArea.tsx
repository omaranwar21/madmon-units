"use client";

import React from "react";
import { Button } from "../ui/button";
import { FilterIcon, LucideSortAsc, LucideSortDesc, Plus } from "lucide-react";

import { useFilterStore } from "@/zustand/filterStore";
import { usePaginationStore } from "@/zustand/paginationStore";
import { useSortStore } from "@/zustand/sortStore";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const HeaderCardsArea = () => {
  const { dateFilter, priceFilter } = useFilterStore();
  const { setCurrentPage } = usePaginationStore();
  const { sortDirection, sortDirectionToggle } = useSortStore();
  return (
    <div className="grid grid-cols-12 justify-between items-center mb-6">
      <h1 className="col-span-12 sm:col-span-3 text-2xl font-bold text-[#494949] flex text-center sm:text-left items-center justify-center sm:justify-center sm:mb-0 mb-4">
        My Units
      </h1>
      <div className="col-span-12 sm:col-span-9 gap-1 flex justify-center sm:justify-end items-center">
        <DropdownMenu>
          <DropdownMenuTrigger className="bg-[#6666FF] text-white shadow hover:bg-[#6666ff8e] h-9 w-9 rounded-md flex items-center justify-center">
            <FilterIcon />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem
              onClick={() => {
                dateFilter();
                setCurrentPage(1);
              }}
              className="text-[#0512F5] bg-white cursor-pointer"
            >
              By Date
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => {
                priceFilter();
                setCurrentPage(1);
              }}
              className="text-[#0512F5] bg-white cursor-pointer"
            >
              By Price
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button
          variant="default"
          size="icon"
          className="bg-[#6666FF] hover:bg-[#6666ff8e]"
          onClick={() => {
            sortDirectionToggle();
            setCurrentPage(1);
          }}
        >
          {sortDirection === "desc" ? <LucideSortDesc /> : <LucideSortAsc />}
        </Button>
        <Button
          className="gap-2 bg-[#6666FF] hover:bg-[#6666ff8e] px-[96px] py-6"
          variant="default"
        >
          <Plus className="h-4 w-4" /> Add Unit
        </Button>
      </div>
    </div>
  );
};

export default HeaderCardsArea;
