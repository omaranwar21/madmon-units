import { IProperty } from "@/types/card-types";

export function formatDate(timestamp: string): string {
  const date = new Date(timestamp);
  const day = date.getUTCDate();
  const month = date.getUTCMonth() + 1;
  const year = date.getUTCFullYear();

  return `${day}/${month}/${year}`;
}

export function previewedUnits(
  currentPage: number,
  units: IProperty[]
): IProperty[] {
  const firstItemIndex = (currentPage - 1) * 4;
  const lastItemIndex = firstItemIndex + 4;
  return units.slice(firstItemIndex, lastItemIndex);
}
