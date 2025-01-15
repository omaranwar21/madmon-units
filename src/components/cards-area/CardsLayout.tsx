import React, { useEffect, useState } from "react";
import { Card } from "../ui/card";
import { Bath, Bed, LucideProps, Maximize, Trash, User } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import PaginationArea from "./PaginationArea";
import { Badge } from "@/components/ui/badge";

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
interface IProperty {
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

const properties: IProperty[] = [
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

const CardsLayout = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsViewed, setItemsViewed] = useState(properties.slice(0, 4));

  useEffect(() => {
    const firstItem = (currentPage - 1) * 4;
    const lastItem = firstItem + 4;
    setItemsViewed(properties.slice(firstItem, lastItem));
  }, [currentPage]);
  return (
    <div className="space-y-10">
      {itemsViewed.map((property) => (
        <Card
          key={property.id}
          className="rounded-[16px] bg-[#F2F3F4] shadow-lg"
        >
          <div className="flex gap-4">
            <div className="flex items-center justify-center rounded-tl-[16px] rounded-bl-[16px]">
              <Image
                src={property.image}
                alt={property.title}
                width={235}
                height={235}
                className="w-100 h-100 object-cover rounded-tl-[16px] rounded-bl-[16px] py-0"
              />
            </div>
            <div className="flex-1 pt-9">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-bold text-[22px] flex gap-3">
                    {property.title}
                    <Badge
                      variant="default"
                      className={`${property.status.color} px-[10px] py-[2px] font-semibold`}
                    >
                      {property.status.status}
                    </Badge>
                  </h3>

                  <p className="text-[16px] text-[#494949] text-semibold">
                    {property.location}
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-[28px] font-bold text-[#F20000]">
                    {property.price.toLocaleString()} EGP
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 mt-2 w-1/2 min-h-5 h-5">
                {property.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-[#494949] text-[12px]"
                  >
                    <feature.icon
                      className="h-6 w-6 border-[2px] p-1 rounded-[5px] border-[#6666FF] bg-white"
                      color="#6666FF"
                    />
                    <span>
                      {feature.value} {feature.name}
                    </span>
                  </div>
                ))}
                <div className="flex items-center gap-2 text-[#494949] text-[12px]">
                  <Maximize
                    className="h-6 w-6 border-[2px] p-1 rounded-[5px] border-[#6666FF] bg-white"
                    color="#6666FF"
                  />
                  <span>{property.area} m²</span>
                </div>
                {property.hasBroker && (
                  <div className="flex items-center gap-2 mt-2 text-[#494949] text-[12px]">
                    <User
                      className="h-6 w-6 border-[2px] p-1 rounded-[5px] border-[#6666FF] bg-white"
                      color="#6666FF"
                    />
                    <span>{property.brokerName}</span>
                  </div>
                )}
              </div>

              <div className="flex justify-between mt-[2.25rem]">
                {property.status.status === "Approved" &&
                !property.hasBroker ? (
                  <Button
                    variant="outline"
                    className="w-1/2 py-6 border-[1px] rounded-[10px] border-[#6666FF] font-bold text-[#6666FF]"
                  >
                    Assign a Broker
                  </Button>
                ) : (
                  !property.isEditable && <div className="w-1/2"></div>
                )}

                {property.isEditable && (
                  <Button
                    variant="outline"
                    className="w-1/2 py-6 border-[1px] rounded-[10px] border-[#6666FF] font-bold text-[#6666FF]"
                  >
                    Edit
                  </Button>
                )}

                <div className="text-[16px] text-[#494949] flex flex-col items-end">
                  <span className="font-bold">Added</span>
                  <span>{new Date().toLocaleDateString()}</span>
                </div>
              </div>
            </div>

            <div className="h-100 w-1/12 flex justify-center items-center bg-[#f000007f] rounded-tr-[16px] rounded-br-[16px]">
              <Trash color="white" />
            </div>
          </div>
        </Card>
      ))}
      <PaginationArea
        listLength={properties.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        itemsPerPage={4}
      />
    </div>
  );
};

export default CardsLayout;
