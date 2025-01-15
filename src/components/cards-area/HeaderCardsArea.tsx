import React from "react";
import { Button } from "../ui/button";
import { FilterIcon, LucideSortDesc, Plus } from "lucide-react";

const HeaderCardsArea = () => {
  return (
    <div className="grid grid-cols-12 justify-between items-center mb-6">
      <h1 className="col-span-3 text-2xl font-bold text-[#494949]">My Units</h1>
      <div className="col-span-9 gap-2 flex justify-end items-center">
        <Button
          variant="default"
          className="bg-[#6666FF] hover:bg-[#6666ff8e]"
          size="icon"
        >
          <FilterIcon />
        </Button>
        <Button
          variant="default"
          size="icon"
          className="bg-[#6666FF] hover:bg-[#6666ff8e]"
        >
          <LucideSortDesc />
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
