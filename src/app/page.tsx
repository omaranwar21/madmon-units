import React from "react";
import CardsLayout from "@/components/cards-area/CardsLayout";
import HeaderCardsArea from "@/components/cards-area/HeaderCardsArea";
import Sidebar from "@/components/sidebar/Sidebar";

export default function Home() {
  return (
    <main className="xl:container xl:mx-auto m-0 py-8 px-8">
      <div className="grid-cols-12 grid gap-8">
        {/* Sidebar */}
        <Sidebar />

        {/* Cards Area */}
        <div className="col-span-12 xl:col-span-9">
          <HeaderCardsArea />
          <CardsLayout />
        </div>
      </div>
    </main>
  );
}
