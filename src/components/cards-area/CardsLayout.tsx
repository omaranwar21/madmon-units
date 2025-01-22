"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Card } from "../ui/card";
import { Maximize, Trash } from "lucide-react";
import Image from "next/image";
import PaginationArea from "./PaginationArea";
import { Badge } from "@/components/ui/badge";
import Feature from "./Feature";
import { useDeleteUnit, useFetchUnits } from "@/hooks/useUnits";
import { formatDate, previewedUnits } from "@/lib/helpers";
import useUnitsFilter from "@/hooks/useUnitsFilter";
import { useAppStore } from "@/zustand/store";
import Loading from "../common/Loading";
import Error from "../common/Error";

const CardsLayout = () => {
  const { isLoading, isError } = useFetchUnits();
  const { filterID, sortDirection, units } = useAppStore();

  const router = useRouter();

  // Get initial page from the URL or default to 1
  const [currentPage, setCurrentPage] = useState<number>(1);

  const deleteUnit = useDeleteUnit();

  const { sortedUnits } = useUnitsFilter({
    unitsList: units || [],
    filterID,
    sortingDir: sortDirection,
  });

  // Update URL param when the page changes
  useEffect(() => {
    router.push(`?page=${currentPage}`, undefined);
  }, [currentPage, router]);

  // Read page from URL on initial load
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const page = parseInt(params.get("page") || "1");
    if (!isNaN(page)) {
      setCurrentPage(page);
    }
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  const handleDelete = (id: number) => {
    deleteUnit.mutate(id);
  };

  return (
    <div className="space-y-10">
      {previewedUnits(currentPage, sortedUnits).map((property) => (
        <Card
          key={property.id}
          className="rounded-[16px] bg-[#F2F3F4] shadow-lg"
        >
          <div className="grid grid-cols-12 gap-0">
            {/* Image side */}
            <div className="grid col-span-12 md:col-span-4 md:rounded-tl-[16px] md:rounded-bl-[16px] rounded-t-[16px] relative">
              {property.hasBroker && (
                <div className="bg-[#0512F5] absolute top-0 left-0 rounded-tl-[16px] w-1/2 text-center rounded-br-[16px] py-1 text-white text-[12px]">
                  Reserved
                </div>
              )}
              <Image
                src={property.image}
                alt={property.title}
                width={1024}
                height={1024}
                objectFit="cover"
                className="md:rounded-tl-[16px] md:rounded-bl-[16px] py-0 md:rounded-tr-none rounded-t-[16px]"
              />
            </div>

            {/* Details side */}
            <div className="col-span-12 md:col-span-8">
              <div className="grid grid-cols-12 p-0 relative h-full">
                {/* title, badge */}
                <div className="md:col-span-7 col-span-12 flex flex-col justify-evenly p-4 pb-0">
                  <h3 className="font-bold text-[22px] flex gap-4 items-center capitalize">
                    {property.title}
                    <Badge
                      variant="default"
                      className={`${
                        property.status === "Pending"
                          ? "bg-[#02AE36]"
                          : property.status === "Reserved"
                          ? "bg-[#6666FF]"
                          : "bg-[#F20000]"
                      } px-[10px] py-[2px] font-semibold h-5 max-h-5 flex items-center rounded-[4px]`}
                    >
                      {property.status}
                    </Badge>
                  </h3>
                  <p className="text-[16px] text-[#494949] text-semibold">
                    {property.location}
                  </p>
                  <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 mt-2 min-h-5 h-5 gap-1">
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
                  </div>
                  <div className="flex justify-between mt-[2rem] col-span-3"></div>
                </div>

                {/* Price, Added */}
                <div className="row col-span-12 md:col-span-4 flex md:flex-col flex-row items-center md:items-end md:justify-evenly justify-between p-4 pt-0">
                  <div className="text-2xl font-semibold text-[#F20000] text-right">
                    {property.price.toLocaleString()}{" "}
                    <span className="text-[20px] font-normal">EGP</span>
                  </div>

                  <div className="text-lg text-[#494949] flex flex-col items-end">
                    <span className="font-bold">Added</span>
                    <span>{formatDate(property.date)}</span>
                  </div>
                </div>
                <div
                  onClick={() => handleDelete(property.id)}
                  className="md:h-full flex justify-center items-center bg-[#f000007f] md:rounded-tr-[16px] md:rounded-br-[16px] cursor-pointer col-span-12 md:col-span-1 py-[1rem] md:py-0 rounded-b-[16px] rounded-t-none md:rounded-bl-none"
                >
                  <Trash color="white" />
                </div>
              </div>
            </div>
          </div>
        </Card>
      ))}
      <PaginationArea
        listLength={units ? units.length : 0}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        itemsPerPage={4}
        currentItemsViewed={previewedUnits(currentPage, sortedUnits).length}
      />
    </div>
  );
};

export default CardsLayout;
