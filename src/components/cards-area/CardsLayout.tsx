"use client";
import React, { useEffect, useState } from "react";
import { Card } from "../ui/card";
import { Maximize, Trash, User } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import PaginationArea from "./PaginationArea";
import { Badge } from "@/components/ui/badge";
import { properties } from "@/data/cards-data";
import Feature from "./Feature";
import { IProperty } from "@/types/card-types";

const CardsLayout = () => {
  // States
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsViewed, setItemsViewed] = useState<IProperty[]>(
    properties.slice(0, 4)
  );

  //Side Effects
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
          <div className="grid grid-cols-12 gap-0">
            {/* Image side */}
            <div className="grid col-span-3 rounded-tl-[16px] rounded-bl-[16px] relative">
              {property.hasBroker && (
                <div className="bg-[#0512F5] absolute top-0 left-0 rounded-tl-[16px] w-1/2 text-center rounded-br-[16px] py-1 text-white text-[12px]">
                  Reserved
                </div>
              )}
              <Image
                src={property.image}
                alt={property.title}
                width={235}
                height={235}
                className="w-100 h-100 object-contain rounded-tl-[16px] rounded-bl-[16px] py-0"
              />
            </div>

            {/* Details side */}
            <div className={`col-span-${!property.hasBroker ? "8" : "9"}`}>
              <div className="grid grid-cols-12 p-4 pb-8 relative h-full">
                {/* title, badge */}
                <div className="col-span-7 flex flex-col justify-between">
                  <h3 className="font-bold text-[22px] flex gap-4 items-center">
                    {property.title}
                    <Badge
                      variant="default"
                      className={`${
                        property.status.color === "bg-[#02AE36]"
                          ? "bg-[#02AE36]"
                          : property.status.color === "bg-[#6666FF]"
                          ? "bg-[#6666FF]"
                          : "bg-[#F20000]"
                      } px-[10px] py-[2px] font-semibold h-5 max-h-5 flex items-center rounded-[4px]`}
                    >
                      {property.status.status}
                    </Badge>
                  </h3>
                  <p className="text-[16px] text-[#494949] text-semibold">
                    {property.location}
                  </p>
                  <div className="grid grid-cols-3 mt-2 min-h-5 h-5">
                    {property.features.map((feature, index) => (
                      <Feature
                        key={index}
                        featureName={feature.name}
                        featureIcon={feature.icon}
                        featureValue={feature.value}
                      />
                    ))}

                    <Feature
                      featureName="m²"
                      featureIcon={Maximize}
                      featureValue={property.area.toString()}
                    />
                    {property.hasBroker && (
                      <Feature
                        featureName=""
                        featureIcon={User}
                        featureValue={property.brokerName || ""}
                        className="mt-2"
                      />
                    )}
                  </div>
                  <div className="flex justify-between mt-[2rem] col-span-3">
                    {property.status.status === "Approved" &&
                    !property.hasBroker ? (
                      <Button
                        variant="outline"
                        className="w-full py-6 border-[1px] rounded-[10px] border-[#6666FF] font-bold text-[#6666FF]"
                      >
                        Assign a Broker
                      </Button>
                    ) : (
                      !property.isEditable && <div className="w-1/2"></div>
                    )}

                    {property.isEditable && (
                      <Button
                        variant="outline"
                        className="w-full py-6 border-[1px] rounded-[10px] border-[#6666FF] font-bold text-[#6666FF]"
                      >
                        Edit
                      </Button>
                    )}
                  </div>
                </div>

                {/* Price, Added */}
                <div className="col-span-5 gap-0 flex flex-col justify-between">
                  <div className="text-[28px] font-semibold text-[#F20000] text-right">
                    {property.price.toLocaleString()}{" "}
                    <span className="text-[20px] font-normal">EGP</span>
                  </div>

                  <div className="text-[16px] text-[#494949] flex flex-col items-end">
                    <span className="font-bold">Added</span>
                    <span>{new Date().toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
            </div>

            {!property.hasBroker && (
              <div className="col-span-1 h-100 flex justify-center items-center bg-[#f000007f] rounded-tr-[16px] rounded-br-[16px]">
                <Trash color="white" />
              </div>
            )}
          </div>
        </Card>
      ))}
      <PaginationArea
        listLength={properties.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        itemsPerPage={4}
        currentItemsViewed={itemsViewed.length}
      />
    </div>
  );
};

export default CardsLayout;
