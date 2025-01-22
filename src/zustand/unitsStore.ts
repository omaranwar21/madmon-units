import { create } from "zustand";
import { IProperty } from "@/types/card-types";

interface UnitsState {
  units: IProperty[];
  updateUnits: (units: IProperty[]) => void;
}

export const useUnitsStore = create<UnitsState>((set) => ({
  units: [],
  updateUnits: (units) => set(() => ({ units })),
}));
