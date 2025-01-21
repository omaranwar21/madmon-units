"use client";
import React from "react";
import { Button } from "../ui/button";
import { FilterIcon, LucideSortAsc, LucideSortDesc, Plus } from "lucide-react";
import { useAppStore } from "@/zustand/store";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const HeaderCardsArea = () => {
  const {
    filterID,
    dateFilter,
    priceFilter,
    sortDirection,
    sortDirectionToggle,
  } = useAppStore();

  console.log(filterID, "filterID");

  return (
    <div className="grid grid-cols-12 justify-between items-center mb-6">
      <h1 className="col-span-3 text-2xl font-bold text-[#494949]">My Units</h1>
      <div className="col-span-9 gap-2 flex justify-end items-center">
        <DropdownMenu>
          <DropdownMenuTrigger className="bg-[#6666FF] text-white shadow hover:bg-[#6666ff8e] h-9 w-9 rounded-md flex items-center justify-center">
            <FilterIcon />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem
              onClick={dateFilter}
              className="text-[#0512F5] bg-white cursor-pointer"
            >
              By Date
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={priceFilter}
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
          onClick={sortDirectionToggle}
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
