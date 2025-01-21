import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../utils/api/api";
import { Endpoints, QueryKeys } from "@/utils/api/endpoints";
import { IProperty, IUnitRequest } from "@/types/card-types";
import { Bath, Bed } from "lucide-react";
import { useAppStore } from "@/zustand/store";

// Fetch Units
export const useFetchUnits = () => {
  const { updateUnits } = useAppStore();
  return useQuery({
    queryKey: [QueryKeys.units],
    queryFn: async () => {
      const response = await api.get(Endpoints.units.getUnits);
      const units: IProperty[] = response.data.map((unit: IUnitRequest) => ({
        id: unit.id,
        title: unit.name,
        location: unit.address,
        price: unit.price,
        features: [
          { value: unit.bedroomsNumber, name: "Bedrooms", icon: Bed },
          { value: unit.bathroomsNumber, name: "Bathrooms", icon: Bath },
        ],
        area: unit.space,
        image: unit.coverUrl,
        status: unit.status.charAt(0).toUpperCase() + unit.status.slice(1),
        date: unit.createdAt,
      }));
      updateUnits(units);
      return units;
    },
  });
};

// Delete Unit
export const useDeleteUnit = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string) => {
      await api.delete(`${Endpoints.units.getUnits}/${id}`);
    },
    onSuccess: () => {
      // Invalidate the query to refetch the units after a delete
      queryClient.invalidateQueries({ queryKey: [QueryKeys.units] });
    },
  });
};
