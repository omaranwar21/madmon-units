import { create } from "zustand";

interface SortState {
  sortDirection: "asc" | "desc";
  sortDirectionToggle: () => void;
}

export const useSortStore = create<SortState>((set) => ({
  sortDirection: "asc",
  sortDirectionToggle: () =>
    set((state) => ({
      sortDirection: state.sortDirection === "asc" ? "desc" : "asc",
    })),
}));
