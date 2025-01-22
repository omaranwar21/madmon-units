import { create } from "zustand";

interface FilterState {
  filterID: number;
  dateFilter: () => void;
  priceFilter: () => void;
}

export const useFilterStore = create<FilterState>((set) => ({
  filterID: 1,
  dateFilter: () => set(() => ({ filterID: 1 })),
  priceFilter: () => set(() => ({ filterID: 2 })),
}));
