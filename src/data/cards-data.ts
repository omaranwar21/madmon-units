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
    status: "Approved",
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
    status: "Pending",
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
    status: "Approved",
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
    status: "Rejected",
    isEditable: true,
  },
  {
    id: 5,
    title: "Grand House Real Estate",
    location: "New Cairo, Egypt",
    price: 13500000,
    features: [
      { id: 1, name: "Rooms", icon: Bed, value: "3" },
      { id: 2, name: "Bathroom", icon: Bath, value: "3" },
    ],
    area: 250,
    image: "/assets/cards/1.png",
    status: "Approved",
    hasBroker: false,
  },
  {
    id: 6,
    title: "Grand House Real Estate",
    location: "New Cairo, Egypt",
    price: 13500000,
    features: [
      { id: 1, name: "Rooms", icon: Bed, value: "3" },
      { id: 2, name: "Bathroom", icon: Bath, value: "3" },
    ],
    area: 250,
    image: "/assets/cards/2.png",
    status: "Pending",
  },
];
