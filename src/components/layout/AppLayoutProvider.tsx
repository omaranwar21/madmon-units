import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const AppLayoutProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default AppLayoutProvider;
