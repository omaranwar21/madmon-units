import { IProperty } from "@/types/card-types";
import { Bath, Bed } from "lucide-react";

export const properties: IProperty[] = [
  {
    id: 1,
    title: "Grand House Real Estate",
    location: "New Cairo, Egypt",
    price: 13500000,
    features: [
      { id: 1, name: "Rooms", icon: Bed, value: "3" },
      { id: 2, name: "Bathroom", icon: Bath, value: "3" },
    ],
    area: 250,
    image: "/assets/cards/1.png",
    status: { status: "Approved", color: "bg-[#02AE36]" },
    hasBroker: false,
  },
  {
    id: 2,
    title: "Grand House Real Estate",
    location: "New Cairo, Egypt",
    price: 13500000,
    features: [
      { id: 1, name: "Rooms", icon: Bed, value: "3" },
      { id: 2, name: "Bathroom", icon: Bath, value: "3" },
    ],
    area: 250,
    image: "/assets/cards/2.png",
    status: { status: "Pending", color: "bg-[#6666FF]" },
  },
  {
    id: 3,
    title: "Grand House Real Estate",
    location: "New Cairo, Egypt",
    price: 13500000,
    features: [
      { id: 1, name: "Rooms", icon: Bed, value: "3" },
      { id: 2, name: "Bathroom", icon: Bath, value: "3" },
    ],
    area: 250,
    image: "/assets/cards/3.png",
    status: { status: "Approved", color: "bg-[#02AE36]" },
    hasBroker: true,
    brokerName: "Mohamed Sami",
    isReserved: true,
  },
  {
    id: 4,
    title: "Grand House Real Estate",
    location: "New Cairo, Egypt",
    price: 13500000,
    features: [
      { id: 1, name: "Rooms", icon: Bed, value: "3" },
      { id: 2, name: "Bathroom", icon: Bath, value: "3" },
    ],
    area: 250,
    image: "/assets/cards/4.png",
    status: { status: "Rejected", color: "bg-[#F20000]" },
    isEditable: true,
  },
];
