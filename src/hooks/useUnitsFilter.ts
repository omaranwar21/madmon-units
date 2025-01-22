import { IProperty } from "@/types/card-types";

interface IProps {
  unitsList: IProperty[];
  filterID: number;
  sortingDir: "asc" | "desc";
}

export default function useUnitsFilter({
  unitsList,
  filterID,
  sortingDir,
}: IProps) {
  const sortedUnits = unitsList.slice().sort((a: IProperty, b: IProperty) => {
    if (filterID === 2) {
      // Sort by price
      return sortingDir === "asc" ? a.price - b.price : b.price - a.price;
    } else if (filterID === 1) {
      // Sort by date
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return sortingDir === "asc" ? dateA - dateB : dateB - dateA;
    }
    return 0; // Default case (if no valid filterID is provided)
  });

  return {
    sortedUnits,
  };
}
