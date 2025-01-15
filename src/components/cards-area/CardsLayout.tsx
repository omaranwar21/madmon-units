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
  const [itemsViewed, setItemsViewed] = useState<IProperty[]>(properties.slice(0, 4));

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
          <div className="flex grid-cols-12 gap-4">
            <div className="flex items-center justify-center rounded-tl-[16px] rounded-bl-[16px] relative">
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
                className="w-100 h-100 object-cover rounded-tl-[16px] rounded-bl-[16px] py-0"
              />
            </div>
            <div className="flex-1 pt-9">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-bold text-[22px] flex lg:gap-1 gap-0 flex-col lg:flex-row">
                    {property.title}
                    <Badge
                      variant="default"
                      className={`${
                        property.status.color === "bg-[#02AE36]"
                          ? "bg-[#02AE36]"
                          : property.status.color === "bg-[#6666FF]"
                          ? "bg-[#6666FF]"
                          : "bg-[#F20000]"
                      } px-[10px] py-[2px] font-semibold h-5 max-h-5 w-fit flex items-center rounded-[10px]`}
                    >
                      {property.status.status}
                    </Badge>
                  </h3>

                  <p className="text-[16px] text-[#494949] text-semibold">
                    {property.location}
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-[28px] font-bold text-[#F20000] pr-8">
                    {property.price.toLocaleString()} EGP
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 mt-2 min-h-5 h-5 w-1/2">
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

              <div className="flex justify-between mt-[2.25rem] pr-8">
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

            {!property.hasBroker && (
              <div className="h-100 w-1/12 flex justify-center items-center bg-[#f000007f] rounded-tr-[16px] rounded-br-[16px]">
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
