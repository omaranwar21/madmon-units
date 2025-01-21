"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const AppLayoutProvider = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient();
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      <Footer />
    </div>
  );
};

export default AppLayoutProvider;
