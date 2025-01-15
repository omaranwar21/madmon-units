import { LucideProps } from "lucide-react";

interface IFeatures {
  id: number;
  name: string;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  value: string;
}

interface IStatus {
  status: "Approved" | "Rejected" | "Pending";
  color: "bg-[#02AE36]" | "bg-[#F20000]" | "bg-[#6666FF]";
}

export interface IProperty {
  id: number;
  title: string;
  location: string;
  price: number;
  features: IFeatures[];
  area: number;
  image: string;
  status: IStatus;
  isReserved?: boolean;
  hasBroker?: boolean;
  brokerName?: string;
  isEditable?: boolean;
}
