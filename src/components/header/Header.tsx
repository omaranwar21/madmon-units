import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navItemsStyle = "text-[#0512F5] font-bold text-[20px]";

const Header = () => {
  const [logDropdown, setLogDropdown] = useState(false);

  return (
    <header className="h-[109px] flex items-center bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image src="/assets/logo.svg" width={154} height={154} alt="logo" />
        </div>
        <nav className="flex items-center gap-[34px]">
          <Link href="#" className={navItemsStyle}>
            Home
          </Link>
          <Link href="#" className={navItemsStyle}>
            About
          </Link>
          <Link href="#" className={navItemsStyle}>
            Contact
          </Link>
          <Link
            href="#"
            className={`flex items-center gap-[4px] justify-center ${navItemsStyle}`}
          >
            <Image
              className="mb-[2px]"
              alt=""
              src="/assets/marketeq_favourite.svg"
              width={21}
              height={19}
            />
            Favourite
          </Link>
          <Link
            href="#"
            className={`flex items-center gap-[4px] justify-center ${navItemsStyle}`}
          >
            <Image
              className="mb-[2px]"
              alt=""
              src="/assets/earth.svg"
              width={19}
              height={19}
            />
            EN
          </Link>
          <div className="flex items-center gap-1">
            <Image
              src="/assets/Ellipse 156.svg"
              width={25}
              height={25}
              alt="user-pic"
            />
            <DropdownMenu onOpenChange={() => setLogDropdown(!logDropdown)}>
              <DropdownMenuTrigger className="flex items-center gap-1">
                Omar Mohamed
                <Image
                  src="/assets/arrow.svg"
                  width={15}
                  height={15}
                  alt="arrow"
                  className={`transform transition-transform duration-300 ${
                    logDropdown ? "rotate-180" : ""
                  }`}
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem className="text-[#0512F5]">
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
