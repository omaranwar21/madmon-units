import { IProperty } from "@/types/card-types";
import { create } from "zustand";

interface AppState {
  filterID: number;
  units: IProperty[];
  sortDirection: "asc" | "desc";
  updateUnits: (units: IProperty[]) => void;
  dateFilter: () => void;
  priceFilter: () => void;
  sortDirectionToggle: () => void;
}

const initialState: Omit<
  AppState,
  "dateFilter" | "priceFilter" | "sortDirectionToggle" | "updateUnits"
> = {
  filterID: 1,
  units: [],
  sortDirection: "asc",
};

export const useAppStore = create<AppState>((set) => ({
  ...initialState,
  sortDirectionToggle: () =>
    set((state) => ({
      sortDirection: state.sortDirection === "asc" ? "desc" : "asc",
    })),
  dateFilter: () => set(() => ({ filterID: 1 })),
  priceFilter: () => set(() => ({ filterID: 2 })),
  updateUnits: (units) => set(() => ({ units })),
}));
