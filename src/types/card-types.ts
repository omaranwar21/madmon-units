import { LucideProps } from "lucide-react";

interface IFeatures {
  name: string;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  value: string;
}

export interface IProperty {
  id: number;
  title: string;
  location: string;
  price: number;
  features: IFeatures[];
  area: number;
  image: string;
  date: string;
  status: "Reserved" | "Sold" | "Pending";
  isReserved?: boolean;
  hasBroker?: boolean;
  brokerName?: string;
  isEditable?: boolean;
}

export interface IUnitRequest {
  createdAt: string;
  name: string;
  coverUrl: string;
  address: string;
  price: number;
  bedroomsNumber: number;
  bathroomsNumber: number;
  space: number;
  status: "pending" | "approved" | "rejected";
  id: string;
}
