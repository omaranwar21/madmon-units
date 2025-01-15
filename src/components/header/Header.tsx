import React from "react";
import Image from "next/image";
import AppNav from "./AppNav";

const Header = () => {
  return (
    <header className="h-[109px] flex items-center bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image src="/assets/logo.svg" width={154} height={154} alt="logo" />
        </div>

        {/* Navigation for medium and larger screens */}
        <AppNav type="nav" />

        {/* Menu Button for smaller screens */}
        <AppNav type="sheet" />
      </div>
    </header>
  );
};

export default Header;
